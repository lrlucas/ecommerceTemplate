import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CarritoService } from '../../services/carrito.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: []
})
export class ProductDetailsComponent implements OnInit {

  product: any = {};

  constructor(private activatedRouter: ActivatedRoute,
              public _productService: ProductService,
              public _carritoService: CarritoService) {

    this.activatedRouter.params
      .subscribe( parametro => {
        this._productService.getProductById(parametro['id'])
          .subscribe( resp => {
            this.product = resp;
            console.log(this.product);
          });
      });


  }


  ngOnInit() {

  }

}
