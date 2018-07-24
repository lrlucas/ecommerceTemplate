import { Routes, RouterModule } from "@angular/router";

import { HomeProductComponent } from './components/home-product/home-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import {LoginComponent} from './components/login/login.component';



const appRoutes: Routes = [

  { path: 'home', component: HomeProductComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

// Ruta home no existe por eso la clase active no se coloca sobre
// el home de la app

export const APP_ROUTES = RouterModule.forRoot(appRoutes);
