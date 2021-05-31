import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './../../shared/cart.service';
import { CartItem } from './../../shared/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  public items: CartItem[] = [];
  public total: number = 0;

  public item: any;

  constructor( private cartService: CartService) { 
    if(localStorage.getItem('Shop.cart')){
      this.items = JSON.parse(localStorage.getItem('Shop.cart') || '[]');
    }
    this.items = this.cartService.getCartItems().map(value => this.item = value);
  }

  ngOnInit(): void {
    this.totalPrice();
    this.cartService.saveToStorage();
  }

  get count(){
    return this.items.length;
  }
  
  totalPrice(){
    this.items.reduce((acc, product) => {
      this.total = (acc + (product.price * product.quantity));
      return this.total;
    }, 0)
  }

  add($event:CartItem) {
    this.cartService.add($event);
    this.total += $event.price;
  }

  remove($event:CartItem) {
    this.cartService.remove($event);
    this.total -= $event.price;
    if(this.total <= 0 || this.items.length === 0) this.total = 0;   
  }

}
