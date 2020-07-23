import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@core/models/User';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private readonly API = `${environment.api}users`;

  constructor(private http: HttpClient) { }

  all(): Observable<any> {
    return this.http.get(`${this.API}`);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.API}/${id}`);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(`${this.API}`, user);
  }

  update(user: User): Observable<User> {
    return this.http.post<User>(`${this.API}/${user.id}`, user);
  }
}
