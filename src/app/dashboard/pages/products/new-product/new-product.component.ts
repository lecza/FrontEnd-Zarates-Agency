import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  categories=[ 'Tecnologia', 'Hogar', 'Frutas' ];
  productForm: FormGroup = this.formBuilder.group({
    name: [ '' ],
    quantity: [ '' ],
    price: [ '' ],
    description: [ '' ],
    category: [ '' ],
    urlImage: [ '' ]
  });

  constructor( private formBuilder: FormBuilder ) {}

  onSubmit() {
    console.log( this.productForm.value );
  }
}
