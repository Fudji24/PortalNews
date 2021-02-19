import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService {
  constructor(private apiService: ApiService) {
  }

  isAuthenticated() {
    const token = this.getToken();

    if (!token || token.length === 0) {
      return false;
    }

    if (this.isExpired(token)) {
      return false;
    } else {
      return true;
    }


  }

  login(email, password) {
    return this.apiService.postHttp('login', {email, password}, {});
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');

  }

  getToken() {
    return localStorage.getItem('token');
  }

  isExpired(token: string): boolean {

    if (token) {

      const date: Date = new Date(0);
      const decoded: { exp: number } = jwt_decode(token);

      if (typeof decoded === 'object' && decoded.hasOwnProperty('exp')) {

        date.setUTCSeconds(decoded.exp);
        if (date.valueOf() > (new Date().valueOf())) {
          return false;
        }
      }

      return true;
    }
  }
}
