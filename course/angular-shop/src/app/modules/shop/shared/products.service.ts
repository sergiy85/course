import { Product } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {
    
  private productsUrl:string = '/assets/products.json';
  products: Product[] = [];

  constructor(private http: HttpClient) { }
  
  loadProductsList(): Observable<Product[]>  {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        tap(_ => console.log('fetched products', this.productsUrl)),
        catchError(error => {
          return of([]);
        })
      );
  }
}
