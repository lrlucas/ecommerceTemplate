import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';


@Injectable()
export class UserService {

  constructor(public http: HttpClient) {

  }

  userRegister(user: any) {
    let url = `${URL_SERVICIOS}/user/create/customer/`;
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post(url, {
      'username': user.user,
      'password': user.password,
      'first_name': user.first_name,
      'last_name': user.last_name,
      'email': user.email
    }, { headers: headers });
  }

  loginUser(user: any) {
    let url = `${URL_SERVICIOS}/user/token/obtain/`;
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(url, {
      'username': user.user,
      'password': user.password
    }, { headers: headers });

  }


  guardar_token_usuario(token: string) {
    return localStorage.setItem('token', token);
  }

  obtener_token_usuario(key: string) {
    return localStorage.getItem(`${key}`);
  }

  borrar_token_usuario(key: string) {
    localStorage.removeItem(`${key}`);
  }







}
