import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  register = "http://127.0.0.1:8000/register";
  auth = "http://127.0.0.1:8000/auth";
  login = "http://127.0.0.1:8000/login";
  logout = "http://127.0.0.1:8000/logout";
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {


  }
  rmToken() {
    // clear the token from the local storage.
    (<any>window).localStorage.clear();
  }
  setUserId() {
    // clear the token from the local storage.
    (<any>window).localStorage.clear();
  }
  regUser(data: any) {
    console.log(data)

    return this.http.post(this.register, data, { headers: this.httpHeaders });

  }
  logUser(data: any) {
    console.log(data)
    return this.http.post(this.auth, data, { headers: this.httpHeaders });

  }
  logInUser(data: any) {
    console.log(data)
    return this.http.post(this.login, data, { headers: this.httpHeaders });

  }
  logoutUser() {

    return this.http.post(this.logout, { headers: this.httpHeaders });

  }
}
