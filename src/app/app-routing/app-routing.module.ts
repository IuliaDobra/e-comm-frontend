import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { AuthGuard } from './auth.guard';
import {Role} from '../login/role.enum';
import {StoresComponent} from '../stores/stores.component';
import {ProductsComponent} from '../products/products.component';
import {ProductsListComponent} from '../products/products-list/products-list.component';
import {CartComponent} from '../cart/cart.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignupComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.SELLER, Role.ADMIN] }
  },
  {
    path: 'stores',
    component: StoresComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.SELLER, Role.ADMIN] }
  },
  {
    path: 'stores/:storeId/products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.SELLER] }
  },
  {
    path: 'products',
    component: ProductsListComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.BUYER] }
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.BUYER] }
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'stores', pathMatch:  'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
