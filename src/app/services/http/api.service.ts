import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {


  constructor(public http: HttpClient) {
    const token = localStorage.getItem('token')
    if (token && token.length > 0) {
      this.setHeader(token);
    }

  }

  baseUrl = 'http://localhost:63867/api/';
  private header: HttpHeaders;

  private parseUrlParams(params) {

    let urlParams: HttpParams = new HttpParams();

    for (const key in params) {

      if (params.hasOwnProperty(key)) {

        if (typeof key === 'string' && typeof params[key] !== 'undefined') {
          urlParams = urlParams.set(key, params[key].toString());
        }

      }

    }

    return urlParams;
  }

  setHeader(token: string): void {

    this.header = new HttpHeaders()
      .append('Content-Type', 'application/json');

    if (token) {
      this.header = this.header.append('Authorization', `Bearer ${token}`);
    }
  }

  getHttp(path: string, params) {
    return this.http.get(`${this.baseUrl}${path}`, {
      headers: this.header,
      params: this.parseUrlParams(params)
    });
  }

  postHttp(path: string, body: object, params) {

    return this.http.post(`${this.baseUrl}${path}`, JSON.stringify(body), {
      headers: this.header,
      params: this.parseUrlParams(params)
    });
  }

  addNew(val: any){
    return this.http.post(this.baseUrl + "news", val);
  }

  editNew(val: any){
    return this.http.put(this.baseUrl + "news", val);
  }

  deleteNew(val: any){
    return this.http.delete(this.baseUrl + "news/" + val);
  }
}
