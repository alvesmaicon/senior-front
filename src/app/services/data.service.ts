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
    for ( let item_of of this.items){
      if (item_of.uid === item.uid){
        const index = this.items.indexOf(item_of, 0);
        if (index > -1) {
          this.items.splice(index, 1);
        }
        localStorage.setItem('items', JSON.stringify(this.items));
      }
    }
  }

  getItemByUid(uid: string): Item {
    this.items = this.getItems();
    let item: Item = new Item();
    for ( let item_of of this.items){
      if (item_of.uid === uid){
        
        item = item_of;
        if(item_of.expiration != null){
          item.expiration = new Date(item_of.expiration.valueOf().toString());
        }

        item.manufacture = new Date(item_of.manufacture.valueOf().toString());
        break;
      }
    }


    return item;
  }

}
