import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects!: Project[];

  constructor( 
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe( data => {
      console.log( data );

      this.projects = data.data;
    });
  }

  goProjectDetail( id: string ) {
    this.router.navigateByUrl( `/project/${ id }` );
  }
}
