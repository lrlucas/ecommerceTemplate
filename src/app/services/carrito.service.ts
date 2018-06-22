import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class CarritoService {

  items: any[] = [];
  total_carrito: number = 0;



  constructor(private toastr: ToastrService) {
    this.cargar_storage();
    this.actualizar_total();
  }



  addToCart(item_parametro: any) {
    for (let item of this.items) {
      if (item.id === item_parametro.id) {
        this.toastr.warning('El producto ya esta en el carrito', 'Error', {
          timeOut: 2500,
        });
        return;
      }
    }

    this.items.push(item_parametro);
    this.actualizar_total();
    this.guardar_storage();
    this.toastr.success('Producto añadido al carrito', 'Se agrego correctamente', {
      timeOut: 2000
    });

  }



  guardar_storage() {

    localStorage.setItem('products', JSON.stringify(this.items));

  }

  cargar_storage() {

    if (localStorage.getItem("products")) {
      this.items = JSON.parse( localStorage.getItem('products') );

    }

  }

  actualizar_total() {
    this.total_carrito = 0;
    for (let item of this.items) {
      this.total_carrito += Number(item.price);
    }

  }

  borrar_producto_carrito(id: any) {


    for (let i of this.items) {

      if (id === i.id) {
        let posicion_array = this.items.indexOf(i);
        this.items.splice(posicion_array, 1 );
        this.guardar_storage();
        this.actualizar_total();
      }

    }


  }

}

