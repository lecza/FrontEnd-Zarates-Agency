import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/interfaces/service';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services!: Service[];

  constructor(
    private serviceService: ServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.serviceService.getAllServices().subscribe( data => {
      console.log( data );
      this.services = data.data;
    });
  }

  update( id: string ) {
    console.log( 'Edit id: ', id );

    this.router.navigate([ 'dashboard', 'services', 'update', id ])
  }

  remove( id: string ) {
    console.log( 'Delete id: ', id );

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Estas seguro?",
      text: "Esta accion no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, Eliminalo",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Eliminado!",
          text: "Tu servicio ha sido eliminado.",
          icon: "success"
        });

          this.serviceService.deleteServiceById( id ).subscribe( data => {
            console.log( data );

            this.loadData();
          });

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelado",
          text: "Tu proyecto esta seguro :)",
          icon: "error"
        });
      }
    });
  }
}
