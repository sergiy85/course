import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsComponent } from './components/products/products.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { ThankPageComponent } from './components/thank-page/thank-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';

import { ProductsService } from './shared/products.service';
import { CartService } from './shared/cart.service';

import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [
  {path: 'shop', children: [
    {path: '', component: ProductsComponent},
    {path: 'cart', component: CartPageComponent},
    {path: 'thanks', component: ThankPageComponent},
    {path: 'checkout', component: CheckoutPageComponent}
  ]}
];


@NgModule({
  declarations: [
    ProductsComponent,
    CheckoutPageComponent,
    ThankPageComponent,
    CartPageComponent
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule
  ],
  providers: [
    ProductsService,
    CartService
  ],
})
export class ShopModule { }
