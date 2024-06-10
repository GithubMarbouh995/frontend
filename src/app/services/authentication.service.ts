import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:8081/api/v1/auth';

  constructor(private http: HttpClient) { }

  register(request: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, request);
  }

  authenticate(request: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/authenticate`, request);
  }

  refreshToken(): Observable<any> {
    return this.http.get(`${this.apiUrl}/refreshToken`);
  }
  getId(email:String): Observable<any> {
    return this.http.get(`${this.apiUrl}/id?email=`+email);
  }
  finbyId(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/`+id);
  }
}
