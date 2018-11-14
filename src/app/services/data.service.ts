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


  removeItem(item: Item){
    for ( let i = 0; this.items.length; i++){
      if ( item.uid == this.items[i].uid){
        this.items.splice(i, 1);
        localStorage.setItem('items', JSON.stringify(this.items));
      }
    }
  }

  getItemByUid(item: Item): Item {
    this.items = this.getItems();
    console.log(item.uid, this.items, 'log na getitembyuid');
    for ( let j = 0; this.items.length; j++){
      if ( item.uid == this.items[j].uid){
       // item = this.items[j];
       
      }
    }
    console.log(item.name, 'after grab');

    return item;
  }

}
