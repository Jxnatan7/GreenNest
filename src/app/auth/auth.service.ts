import {inject, Injectable} from '@angular/core';
import {tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:3000/api';

  constructor() {}

  login(data: any) {
    return this.httpClient.post(`${this.baseUrl}/login`, data)
      .pipe(tap((result) => {
        localStorage.setItem('authUser', JSON.stringify(result));
      }));
  }

  signup(data: any) {
    return this.httpClient.post(`${this.baseUrl}/register`, data);
  }

  logout() {
    localStorage.removeItem('authUser');
  }

  isLoggedIn() {
    return localStorage.getItem('authUser') !== null;
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }
}

export type TokenResponse = {
  token: string;
}

export type User = {
  id: number;
  email: string;
  name: string;
}
