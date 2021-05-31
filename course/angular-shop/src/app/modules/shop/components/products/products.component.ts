import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './../../shared/product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../shared/products.service';
import { CartService } from './../../shared/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() products: any[];
  @Output() productAdded = new EventEmitter();

  // public products: Product[];
  public loading = true;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService, 
    private cartService: CartService) { 
    
    this.products = [];
  }

  ngOnInit(): void {
    this.getProducts();
    this.loading = false;
  }

  public getProducts(){
    return this.productsService.loadProductsList()
      .subscribe(products => {
        this.products = products;
      });
  }

  addToCart(product:Product) {
    alert('Your product has been added to the cart!');
    // this.cartService.addToCart(product);
    this.cartService.addToCart(product);
  }

}
