import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html'
})
export class HomeProductComponent implements OnInit {

  products: Product;

  constructor(public _productService: ProductService, public router: Router) {

   }

  ngOnInit() {

    this.productAll();

  }

  productAll() {
    this._productService.productAll()
      .subscribe((resp: any) => {
        this.products = resp.results;
      });

  }


  detallesProducto(id: any) {
    this.router.navigate(['/product', id]);
  }


  buscar_producto(termino: string) {
    this._productService.buscar_producto(termino)
      .subscribe(producto => {
        this.products = producto;
      });
  }

}
