import { Injectable } from '@angular/core';

import { Item } from '../models/item';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: Item[];

  constructor() { 
    this.items = [];
  }

  getItems(): Item[]{
    if(localStorage.getItem('items') === null){
      this.items = [];
    } else {
      this.items = JSON.parse(localStorage.getItem('items'));
    }
    return this.items;
  }

  addItem(item: Item): void {
    let items;
    this.items.unshift(item);

    if (localStorage.getItem('items' ) === null) {
      items = [];
      items.unshift(item);
      localStorage.setItem('items', JSON.stringify(items));
    } else {
      items = JSON.parse(localStorage.getItem('items'));
      items.unshift(item);
      localStorage.setItem('items', JSON.stringify(items));
    }

  }
  /*
  removeItem(item : Item) {
    for ( let i = 0; this.items.length; i++){
      if ( item == this.items[i]){
        this.items.splice(i, 1);
        localStorage.setItem('items', JSON.stringify(this.items));
      }
    }
  }
  */

  removeItem(item: Item){
    for ( let i = 0; this.items.length; i++){
      if ( item.name == this.items[i].name){
        this.items.splice(i, 1);
        localStorage.setItem('items', JSON.stringify(this.items));
    }

  }
}

}
