import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { ValidateFormsService } from 'src/app/services/validate-forms.service';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.css']
})
export class NewServiceComponent {
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
