import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  login(login: any): Observable<any> {
    return this.http.post(`${this.API}login`, login).pipe(
      map((data: any) => localStorage.setItem('token', data.token))
    );
  }
}
