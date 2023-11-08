import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // Atributos: Son la forma en que los datos van a estar disponibles para desplegarse en la View Componente
  products!: Product[];

  // Constructor: public, private, proteted
  constructor( 
    private http: HttpClient,
    private productService: ProductService
  ) {}
  
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe( data => {
      console.log( data );    // { ok: true, data: [] }
      this.products = data.data;
    });
  }


  // Ciclos de vida

  // Metodos

}
