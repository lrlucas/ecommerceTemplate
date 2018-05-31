import { AfterViewChecked, Component, OnInit} from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
declare let paypal: any;

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styles: []
})
export class ShoppingCartComponent implements OnInit, AfterViewChecked {
  items: any = this._carritoService.items;

  // product: any = {};
  totalAmount: number = 5;
  paypalLoad: boolean = true;

  // Paypal
  addScript: boolean = false;
  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AcaUqITFUu3RSN9HG0Goh9yY09k9lX14rjkVj2ygxbNy7uXgOyvKOq-SUZy0CLwy0hvEFoQs9zFk1lT1',
      production: ''
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this._carritoService.total_carrito, currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        // Hacer algo cuando el usuario complete el pago
        console.log('PAGO COMPLETADO');
        console.log(payment);
      });
    }
  };

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scriptTagElement = document.createElement('script');
      scriptTagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scriptTagElement.onload = resolve;
      document.body.appendChild(scriptTagElement);
    });
  }
  // Paypal

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      });
    }
  }

  constructor(public _carritoService: CarritoService) {
  }

  ngOnInit() {
  }

  eliminar_producto(id: any) {
    console.log(`Eliminar este producto ${id}`);
    this._carritoService.borrar_producto_carrito(id);
  }

}
