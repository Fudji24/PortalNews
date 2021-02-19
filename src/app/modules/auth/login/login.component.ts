import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/http/auth.service';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { LoginModel } from './login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class AppLoginComponent implements OnInit{
  loginForm : FormGroup;
  loginmodel : LoginModel = new LoginModel();

  constructor(
    private formBuilder : FormBuilder,
    private loginService : LoginServiceService,
    private router: Router
  
  ) { }

  
  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        username : ['',Validators.required],
        password : ['',Validators.required]
      }
    );
  }

  get(key:string) : string
  {
    return this.loginForm.controls[key].value;
  }

  onSubmit() : void{
    this.router.navigate([`news/`]);
    console.log(this.loginForm.value);
    console.log(this.get('username'));
    console.log(this.get('password'));

   
    this.loginmodel.Username = this.get('username');
    this.loginmodel.Password = this.get('password');
    
    this.loginService.AuthenticateUser(this.loginmodel)
        .subscribe((response) => {
            console.log(response);
            localStorage.setItem('token', response.toString());
            sessionStorage.setItem('token', response.toString());
        })

  }
}
