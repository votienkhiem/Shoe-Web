import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public url = 'http://localhost:3000/shoes';
  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
  add(data: any): Observable<any> {
    return this.http.post<any>(this.url, data);
  }
  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, data);
  }
}
