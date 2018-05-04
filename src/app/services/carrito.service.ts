import { Injectable } from '@angular/core';

@Injectable()
export class CarritoService {

  items: any[] = [];

  constructor() { }



  addToCart(item_parametro: any) {
    for (let item of this.items) {
      if (item.id === item_parametro.id) {
        alert('Este Item ya esta en el carrito');
        return;
      }
    }

    this.items.push(item_parametro);
    console.log('CARRITO');
    console.log(this.items);
  }

}

