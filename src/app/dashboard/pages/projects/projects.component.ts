import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects!: Project[];

  constructor( private projectService: ProjectService ) {}

  ngOnInit() {
    this.projectService.getAllProjects().subscribe( data => {
      console.log( data );
      this.projects = data.data;
    });
  }
}
