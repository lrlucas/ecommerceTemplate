import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CarritoService } from '../../services/carrito.service';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: []
})
export class ProductDetailsComponent implements OnInit {

  product: any = {};


  public payPalConfig?: PayPalConfig;

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
    this.initConfig();
  }




//

  private initConfig(): void {
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        sandbox: 'lrlucas78199719-buyer@gmail.com'
      },
      button: {
        label: 'paypal',
      },
      onPaymentComplete: (data, actions) => {
        console.log('OnPaymentComplete');
      },
      onCancel: (data, actions) => {
        console.log('OnCancel');
      },
      onError: (err) => {
        console.log('OnError');
      },
      transactions: [{
        amount: {
          currency: 'USD',
          total: 9
        }
      }]
    });
  }


//

}
