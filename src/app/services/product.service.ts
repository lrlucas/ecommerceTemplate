import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';

@Injectable()
export class ProductService {

  constructor(public http: HttpClient) {
    console.log('Product Service Iniciado');
   }

   productAll() {
     let url = URL_SERVICIOS + '/product/all/';
     console.log(url);
     return this.http.get(url);

   }

   getProductById(id: string) {
    let url = URL_SERVICIOS + `/product/${id}/`;
    return this.http.get(url);
   }


}
