import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

import { products } from 'src/app/fake-data/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  // Atributos: Son la forma en que los datos van a estar disponibles para desplegarse en la View Componente
  products: Product[] = products;

  // Constructor

  // Ciclos de vida

  // Metodos

}
