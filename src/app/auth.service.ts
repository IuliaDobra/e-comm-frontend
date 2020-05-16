import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Promise<any> {
    return this.http.post(`${this.baseUrl}/auth/signin`, { username, password }).toPromise();
  }

  signUp(username: string, password: string, role: string): Promise<any> {
    return this.http.post(`${this.baseUrl}/auth/signup`, { username, password, role }).toPromise();
  }
}
