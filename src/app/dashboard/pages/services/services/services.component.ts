import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from 'src/app/interfaces/service';
import { ValidateFormsService } from 'src/app/services/validate-forms.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services!: Service[];

  serviceForm: FormGroup = this.formBuilder.group({
    name: [ '', [ Validators.required, Validators.minLength( 3 ) ] ],
    price: [ '', [ Validators.required, this.validateForm.validatePrice ] ],
    description: [ '', [ this.validateForm.validateDescription ] ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private validateForm: ValidateFormsService
  ) {}

  onSubmit() {
    console.log( this.serviceForm.value );

    // TODO: Invocar el servicio

    this.serviceForm.reset();

    setTimeout( () => {
      this.router.navigate( [ 'dashboard', 'services' ] );
    }, 1000 );
  }
}
