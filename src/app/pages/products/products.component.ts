import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

import { products } from 'src/app/fake-data/products';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  // Atributos: Son la forma en que los datos van a estar disponibles para desplegarse en la View Componente
  products: Product[] = products;

  // Constructor: public, private, proteted
  constructor( private http: HttpClient ) {
    this.getProducts();
  }

  async getProducts() {
    // TypeScript + HttpClientModule (Angular)
    this.http.get( 'http://localhost:4001/api/products' ).subscribe( ( data ) => {
      console.log( data );
    });

    // JavaScript: FetchAPI
    const response = await fetch( 'http://localhost:4001/api/products' );
    const data = await response.json();
    console.log( data );
  }

  // Ciclos de vida

  // Metodos

}
