import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/http/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit{

  
  constructor(public authService: AuthService, private router: Router){
    
  }

  ngOnInit(){
    
  }

  logout(){
    this.authService.logout();
    this.router.navigate([`news`]);
  }

  login(){
    this.router.navigate([`admin`]);
  }


  

}
