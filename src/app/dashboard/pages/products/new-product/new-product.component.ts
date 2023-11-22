import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
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
    private validateForms: ValidateFormsService,
    private productService: ProductService,
    private router: Router
  ) {}

  onSubmit() {
    console.log( this.productForm.value );

    this.productService.createProduct( this.productForm.value ).subscribe( data => {
      console.log( data );
    });

    this.productForm.reset();

    setTimeout( () => {
      this.router.navigateByUrl( '/dashboard/products' );
    }, 1000 );

  }
}
