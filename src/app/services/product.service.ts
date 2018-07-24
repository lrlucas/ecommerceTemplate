import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(public http: HttpClient) {
    console.log('Product Service Iniciado');
   }

   productAll() {
     let url = URL_SERVICIOS + '/product/all/';
     return this.http.get(url);

   }

   getProductById(id: string) {
    let url = URL_SERVICIOS + `/product/${id}/`;
    return this.http.get(url);
   }

   buscar_producto(termino: string) {
    let url = `${ URL_SERVICIOS }/product/search/?q=${ termino }`;
    return this.http.get(url)
      .map( (data: any) => {
        return data.results;
      });
   }


}
