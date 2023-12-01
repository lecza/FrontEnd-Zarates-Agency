import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects!: Project[];

  constructor( private projectService: ProjectService ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.projectService.getAllProjects().subscribe( data => {
      console.log( data );
      this.projects = data.data;
    });
  }

  remove( id: string ) {
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
          text: "Tu proyecto ha sido eliminado.",
          icon: "success"
        });

          this.projectService.deleteProjectById( id ).subscribe( data => {
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
