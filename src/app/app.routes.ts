import { Routes, RouterModule } from "@angular/router";

import { HomeProductComponent } from './components/home-product/home-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ProfileComponent } from './components/profile/profile.component';



const appRoutes: Routes = [

  { path: 'home', component: HomeProductComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });