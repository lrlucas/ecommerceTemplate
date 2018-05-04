import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductService } from './services/product.service';
import { HomeProductComponent } from './components/home-product/home-product.component';
import { SlidesComponent } from './components/slides/slides.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { APP_ROUTES } from './app.routes';
import { CarritoService } from './services/carrito.service';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgxPayPalModule } from 'ngx-paypal';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeProductComponent,
    SlidesComponent,
    ProductDetailsComponent,
    UserRegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTES,
    NgxPayPalModule
  ],
  providers: [
    ProductService,
    CarritoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }