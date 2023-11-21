import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

// Función de validación personalizada para el campo 'price'
function validatePrice( control: AbstractControl ) {
  const value = control.value;

  if ( value < 0 ) {

    return { negativeValue: true };
  }

  return null;
}


// Función de validación personalizada para el campo 'quantity'
function validateQuantity( control: AbstractControl ) {
  const value = control.value;

  if ( value <= 0 ) {
    return { invalidQuantity: true };
  }

  return null;
}

// Función de validación personalizada para el campo 'description'
function validateDescription( control: AbstractControl ): { [key: string]: boolean } | null {
  const value = control.value;

  if ( value && (value.length < 3 || value.length > 140 ) ) {
    return { invalidDescriptionLength: true };
  }

  return null;
}

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  categories=[ 'Tecnologia', 'Hogar', 'Frutas' ];
  productForm: FormGroup = this.formBuilder.group({
    name: [ '', [ Validators.required, Validators.minLength( 3 ) ] ],
    quantity: [ '', [ Validators.required, validateQuantity ] ],
    price: [ '', [ validatePrice ] ],
    description: [ '', [ validateDescription ] ],
    category: [ '' ],
    urlImage: [ '' ]
  });

  constructor( private formBuilder: FormBuilder ) {}

  onSubmit() {
    console.log( this.productForm.value );
  }
}
