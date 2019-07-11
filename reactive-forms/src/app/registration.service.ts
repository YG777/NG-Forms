import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class RegistrationService {
  _url = `https://httpbin.org/post`;

  constructor(private _http: HttpClient) { }
  
  register(userData) {
    return this._http.post<any>(this._url, userData);
  }
}
