import { Injectable } from '@angular/core';
import { Card } from '../models/Card';


@Injectable({
  providedIn: 'root'
})
export class CardsService {

  url = 'http://localhost:9001/cards';

  cards: Card[] = []

  constructor() { }

  async getAllCards(): Promise<Card[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getCardById(id: number): Promise<Card | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

}
