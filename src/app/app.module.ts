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
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './services/user.service';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarCategoriaComponent } from './components/navbar-categoria/navbar-categoria.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeProductComponent,
    SlidesComponent,
    ProductDetailsComponent,
    UserRegisterComponent,
    ProfileComponent,
    ShoppingCartComponent,
    LoginComponent,
    FooterComponent,
    NavbarCategoriaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
    })
  ],
  providers: [
    ProductService,
    CarritoService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
