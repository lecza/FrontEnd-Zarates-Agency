import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ResponseProducts } from '../interfaces/response-products';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Atributos
  BASE_URL: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getAllProducts() {
    
    return this.http.get<ResponseProducts>( `${ this.BASE_URL }/products` );
  }
}
