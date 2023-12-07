import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateFormsService } from 'src/app/services/validate-forms.service';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent {
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
      this.router.navigate( [ 'dashboard', 'projects' ] );
    }, 1000 );
  }
}
