import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateFormsService } from 'src/app/services/validate-forms.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  categories=[ 'Tecnologia', 'Hogar', 'Frutas' ];
  productForm: FormGroup = this.formBuilder.group({
    name: [ '', [ Validators.required, Validators.minLength( 3 ) ] ],
    quantity: [ '', [ Validators.required, this.validateForms.validateQuantity ] ],
    price: [ '', [ this.validateForms.validatePrice ] ],
    description: [ '', [ this.validateForms.validateDescription ] ],
    category: [ '' ],
    urlImage: [ '' ]
  });

  constructor( 
    private formBuilder: FormBuilder,
    private validateForms: ValidateFormsService
  ) {}

  onSubmit() {
    console.log( this.productForm.value );
  }
}
