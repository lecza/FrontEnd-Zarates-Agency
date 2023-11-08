import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseProducts } from '../interfaces/response-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient ) { }

  getAllProducts() {
    
    return this.http.get<ResponseProducts>( 'http://localhost:4001/api/products' );
  }
}
