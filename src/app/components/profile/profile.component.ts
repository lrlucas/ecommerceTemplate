import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  constructor(public _userService: UserService, public router: Router, private toastr: ToastrService,) { }

  ngOnInit() {
  }


  logout() {

    this._userService.borrar_token_usuario('token');
    this.router.navigate(['/home']);
    this.toastr.success('Usted acaba de salir de la aplicacion', 'Deslogeo exitoso');

  }

}
