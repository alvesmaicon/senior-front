import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  items: Item[];

  constructor() { }

  getItems(): Item[]{
    if(localStorage.getItem('items') === null){
      this.items = [];
    } else {
      this.items = JSON.parse(localStorage.getItem('items'));
    }
    return this.items;
  }
}
