import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { Service } from 'src/app/interfaces/service';
import { ServiceService } from 'src/app/services/service.service';
import { ValidateFormsService } from 'src/app/services/validate-forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent {
  serviceId!: string;

  serviceForm: FormGroup = this.formBuilder.group({
    name: [ '', [ Validators.required, Validators.minLength( 3 ) ] ],
    price: [ '', [ Validators.required, this.validateForm.validatePrice ] ],
    description: [ '', [ this.validateForm.validateDescription ] ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private validateForm: ValidateFormsService,
    private activatedRoute: ActivatedRoute,
    private serviceServices: ServiceService
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

        this.serviceId = id;

        this.serviceServices.getServiceById( id ).subscribe( ( data: Service ) => {
          console.log( data );

          const { description, name, price } = data;

          this.serviceForm.setValue({
            description,
            name,
            price
          });
        })
      });

  }

  onSubmit() {
    console.log( this.serviceForm.value );

    this.serviceServices.updateServiceById( this.serviceId, this.serviceForm.value )
      .subscribe( data => {
        console.log( 'data', data );

        this.serviceForm.reset();
      });

    this.serviceForm.reset();

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Servicio actualizado",
      showConfirmButton: false,
      timer: 1500
    });

    setTimeout( () => {
      this.router.navigate( [ 'dashboard', 'services' ] );
    }, 1000 );
  }
}
