import {Component, OnInit, AfterViewChecked, AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CarritoService } from '../../services/carrito.service';
import { Product } from '../../models/product.model';

declare let paypal: any;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: []
})
export class ProductDetailsComponent implements OnInit, AfterViewChecked, AfterViewInit {

  product: any = {};
  // totalAmount: number = 5;
  // paypalLoad: boolean = true;

  // sandbox: 'AcaUqITFUu3RSN9HG0Goh9yY09k9lX14rjkVj2ygxbNy7uXgOyvKOq-SUZy0CLwy0hvEFoQs9zFk1lT1',


  // // Paypal
  // addScript: boolean = false;
  // paypalConfig = {
  //   env: 'sandbox',
  //   client: {
  //     sandbox: 'AcaUqITFUu3RSN9HG0Goh9yY09k9lX14rjkVj2ygxbNy7uXgOyvKOq-SUZy0CLwy0hvEFoQs9zFk1lT1',
  //     production: ''
  //   },
  //   commit: true,
  //   payment: (data, actions) => {
  //     return actions.payment.create({
  //       payment: {
  //         transactions: [
  //           { amount: { total: this.totalAmount, currency: 'USD' } }
  //         ]
  //       }
  //     });
  //   },
  //   onAuthorize: (data, actions) => {
  //     return actions.payment.execute().then((payment) => {
  //       // Hacer algo cuando el usuario complete el pago
  //       console.log('PAGO COMPLETADO');
  //       console.log(payment);
  //     });
  //   }
  // };
  // addPaypalScript() {
  //   this.addScript = true;
  //   return new Promise((resolve, reject) => {
  //     let scriptTagElement = document.createElement('script');
  //     scriptTagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
  //     scriptTagElement.onload = resolve;
  //     document.body.appendChild(scriptTagElement);
  //   });
  // }
  // // Paypal


  ngAfterViewChecked(): void {
    // if (!this.addScript) {
    //   this.addPaypalScript().then(() => {
    //     paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
    //     this.paypalLoad = false;
    //   });
    // }
  }

  ngAfterViewInit(): void {

  }

  constructor(private activatedRouter: ActivatedRoute,
              public _productService: ProductService,
              public _carritoService: CarritoService
              ) {

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

  addToCart(product: Product) {
    this._carritoService.addToCart(product);
  }


}
