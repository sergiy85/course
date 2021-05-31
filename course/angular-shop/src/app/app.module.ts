import { BlogModule } from './modules/blog/blog.module';
import { ForExampleModule } from './modules/for-example/for-example.module';
import { ShopModule } from './modules/shop/shop.module';

import { UsersService } from './shared/users.service';
import { ProductsService } from './modules/shop/shared/products.service';
import { CartService } from './modules/shop/shared/cart.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserPipe } from './user.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UsersPageComponent,
    NotFoundPageComponent,
    UserPageComponent,
    UserPipe,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ForExampleModule,
    BlogModule,
    ShopModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    UsersService,
    ProductsService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
