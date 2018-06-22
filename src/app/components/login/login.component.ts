import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  forma: FormGroup;

  constructor(public _userService: UserService,
              private toastr: ToastrService,
              public router: Router) { }

  ngOnInit() {

    this.forma = new FormGroup({
      'user': new FormControl('', [ Validators.required, Validators.minLength(3) ]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    });


  }

  login() {
    this._userService.loginUser(this.forma.value)
      .subscribe((data: any) => {
        console.log(data.token);
        this._userService.guardar_token_usuario(data.token);
        this.toastr.success('Usuario logeado exitosamente', 'Bienvenido');
        this.router.navigate(['/home']);
      });
  }

}
