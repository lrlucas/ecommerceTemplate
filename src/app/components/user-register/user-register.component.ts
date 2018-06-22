import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PATTERN_EMAIL } from '../../config/config';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styles: []
})
export class UserRegisterComponent implements OnInit {

  forma: FormGroup;


  constructor(public _userService: UserService, private toastr: ToastrService) {
    console.log('Registro de usuarios');
  }

  ngOnInit() {

    this.forma = new FormGroup({
      'user': new FormControl('', [ Validators.required, Validators.minLength(3) ]),
      'first_name': new FormControl('', Validators.required),
      'last_name': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.pattern(PATTERN_EMAIL)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(7)]),
      'repeat_password': new FormControl()
    });


    this.forma.controls['repeat_password'].setValidators([
      Validators.required,
      Validators.minLength(7),
      this.contraseniasNoIguales.bind(this.forma)
    ]);

  }

  guardarCambiosFormulario() {
    let user: any = this.forma.value;
    this._userService.userRegister(user)
      .subscribe( (data: any) => {
        console.log(data);
        this.toastr.success('Usuario creado exitosamente', `Bienvenido ${data.first_name}`);
      });

    // Resetear el formulario despus de enviar
    this.forma.reset({
      user: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      repeat_password: ''
    });
  }


  contraseniasNoIguales(control: FormControl): any {

    let forma: any = this;

    if (control.value !== forma.controls['password'].value) {
      return {
        noiguales: true
      };
    }
    return null;
  }

}
