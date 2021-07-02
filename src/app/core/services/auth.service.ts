import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from '../models/user';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
             private router : Router) { }

  registerUser(user: User) {
    return this.http.post(`${environment.apiUrl}/api/users/add/`, user)
  }

  loginUser(payload) {
    return this.http.post(`${environment.apiUrl}/api/users/login/`, payload)
  }

  logout(){
    localStorage.removeItem('token')
    // return this.http.get(`${environment.apiUrl}/api/users/logout/`)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
