import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public url = 'http://localhost:3004/account'

  constructor(private http: HttpClient) { }
  login(): any {
    return this.http.get<any>(this.url);
  }
}
