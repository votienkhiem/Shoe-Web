import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public url = 'http://localhost:3000/shoes';
  constructor() { }
}
