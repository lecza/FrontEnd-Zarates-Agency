import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';
import { ValidateFormsService } from 'src/app/services/validate-forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent {
  projectForm: FormGroup = this.formBuilder.group({
    name: [ '', [ Validators.required, Validators.minLength( 3 ) ] ],
    price: [ '', [ Validators.required, this.validateForm.validatePrice ] ],
    urlImage: [ '' ],
    date: [ '' ],
    location: [ '', [ Validators.required, Validators.minLength( 3 ) ] ],
    customer: [ '', [ Validators.required, Validators.minLength( 3 ) ] ],
    urlWebsite: [ ''  ],
    description: [ '', [ this.validateForm.validateDescription ] ]
  });
  projectId!: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private projectService: ProjectService,
    private validateForm: ValidateFormsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        tap( response => {
          console.log( response );  

          return response;
        }),
        map( response => response[ 'id' ] )
      ).subscribe( id  => {
        console.log( id );      /// Extraemos de la URL

        this.projectId = id;

        this.projectService.getProductById( id ).subscribe( ( data: Project ) => {
          console.log( data );

          const { customer, urlWebsite, urlImage, description, location, name, price, date } = data;

          this.projectForm.setValue({
            urlImage,
            customer,
            urlWebsite,
            location,
            description,
            name,
            price,
            date
          });
        })
      });

  }

  updateProject() {
    console.log( this.projectForm.value );

    this.projectService.updateProjectById( this.projectId, this.projectForm.value )
      .subscribe( data => {
        console.log( data );

        this.projectForm.reset();

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Proyecto actualizado",
          showConfirmButton: false,
          timer: 1500
        });

        this.router.navigate([ 'dashboard', 'projects' ]);
      });

  }
}
