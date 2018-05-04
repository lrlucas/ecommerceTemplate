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

    this._productService.productAll()
      .subscribe((resp: any) => {
        console.log(resp); // quitar
        this.products = resp.results;
        console.log(this.products);
      });

  }


  detallesProducto(id: any) {
    console.log(id);
    this.router.navigate(['/product', id]);
  }

}
