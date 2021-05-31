import { Product } from './product';
import { CartItem } from './cartItem';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  products:Product[] = [];
  items: CartItem[] = [];


  constructor(private http: HttpClient) {
  }

  addToCart(product: Product) {
    const productExistInCart = this.getCartItems().find(({name}) => name === product.name);
    if(!productExistInCart){
      this.products.push(product);  
      this.saveToStorage();  
      return;
    }
    productExistInCart.quantity +=1;
    
    this.saveToStorage();
  }

  getProducts() {
    return this.products;
  }

  getCartItems(){
    return this.items = this.products.map(product =>{
      return {
        id: product.id,
        name: product.name,
        quantity: 1,
        price: product.price
      };
    });

  }

  add($event:any) {
    for(let i=0; i<this.items.length; i++){
      if(this.items[i].id === $event.id){
        this.items[i].quantity++;
        this.saveToStorage;
      }
    }
  }

  remove($event:any) {
    for(let i=0; i<this.items.length; i++){
      if(this.items[i].quantity > 0 && this.items[i].id === $event.id){
        this.items[i].quantity--;
        this.saveToStorage;
      }
      if(this.items[i].quantity <= 0){
        this.items[i].quantity = 0;
        this.saveToStorage;
      }
    }
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  saveToStorage(){
    return localStorage.setItem('Shop.cart', JSON.stringify(this.items));
  }
}
