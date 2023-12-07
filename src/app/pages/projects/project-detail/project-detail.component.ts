import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {
  project!: Project;

  constructor( 
    private projectService: ProjectService, 
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

        this.projectService.getProduct( id ).subscribe( data => {
          console.log( data );

          this.project = data;
        });
      });
  }
}
