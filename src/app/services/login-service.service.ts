import { LoginModel } from './../modules/auth/login/login-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {Response, RequestOptions, Headers } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  base_url = "http://localhost:63867/api";
  loginModel : LoginModel;
  constructor(private http: HttpClient) { }

  AuthenticateUser(login : LoginModel){
   
    return this.http.post(this.base_url + "/Login",login)
  }

}