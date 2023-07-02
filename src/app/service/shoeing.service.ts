import { Injectable } from '@angular/core';
import { Shoe } from 'src/shoe';

@Injectable({
  providedIn: 'root'
})
export class ShoeingService {
  public url = 'http://localhost:3000/shoes';

  public shoeList: Shoe[] = [];
  constructor() { }
  async getAllShoes(): Promise<Shoe[]> {
    const data = await fetch(this.url);
    return await data.json() ?? {};
  }
  async getShoeById(id: number): Promise<Shoe | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
}
