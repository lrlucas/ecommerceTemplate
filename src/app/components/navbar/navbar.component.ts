import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import * as $ from 'assets/js/jquery-3.2.1.min.js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(public _carritoService: CarritoService) { }

  public ngOnInit() {
    // $("#nav-item").click(function () {
    //   $("#navbar-collapse").addClass("collapsed");
    // });
  }

}
