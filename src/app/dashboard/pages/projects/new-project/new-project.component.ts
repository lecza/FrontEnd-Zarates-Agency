import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { ValidateFormsService } from 'src/app/services/validate-forms.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent {
  projectForm: FormGroup = this.formBuilder.group({
    name: [ '', [ Validators.required, Validators.minLength( 3 ) ] ],
    price: [ '', [ Validators.required, this.validateForm.validatePrice ] ],
    urlImage: [ '', this.validateForm.validateNormalUrl ],
    date: [ '' ],
    location: [ '', [ Validators.required, Validators.minLength( 3 ) ] ],
    customer: [ '', [ Validators.required, Validators.minLength( 3 ) ] ],
    urlWebsite: [ '', this.validateForm.validateNormalUrl ],
    description: [ '', [ this.validateForm.validateDescription ] ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private projectService: ProjectService,
    private validateForm: ValidateFormsService
  ) {}

  createProject() {
    console.log( this.projectForm.value );

    this.projectService.createProject( this.projectForm.value )
    .subscribe( ( response ) => {
      console.log( response );
    });

  this.projectForm.reset();

  setTimeout( () => {
    this.router.navigate( [ 'dashboard', 'projects' ] );
  }, 1000 );
  }
}
