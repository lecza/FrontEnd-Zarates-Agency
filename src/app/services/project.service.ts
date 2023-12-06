import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ResponseProjects } from '../interfaces/response-projects';
import { Project } from '../interfaces/project';
import { map, tap } from 'rxjs';
import { ResponseProject } from '../interfaces/response-project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
    // Atributos
    BASE_URL: string = environment.baseUrl;
    headers: HttpHeaders;
    token: string;

  constructor( private http: HttpClient ) { 
    const token = localStorage.getItem( 'token' );
    this.token = token ? token : '';
    this.headers = new HttpHeaders().set( 'X-Token', this.token );
    console.log( token );
  }

  createProject( data: Project ) {
    
    return this.http.post<ResponseProjects>( 
      `${ this.BASE_URL }/projects`, 
      data, 
      { headers: this.headers } 
    );
  }

  getAllProjects() {

    return this.http.get<ResponseProjects>( 
      `${ this.BASE_URL }/projects`,
      { headers: this.headers }
    );
  }

  getProjects() {

    return this.http.get<ResponseProjects>( 
      `${ this.BASE_URL }/projects/all`
    );
  }

  getProductById( id: string ) {

    return this.http.get<ResponseProject>( 
      `${ this.BASE_URL }/projects/${ id }`,
      { headers: this.headers }
    ).pipe(
        tap( data => {
          console.log( data );

          return data;
        }),
        map( product => product.data )
      );
  }

  deleteProjectById( id: string ) {

    return this.http.delete(
      `${ this.BASE_URL }/projects/${ id }`,
      { headers: this.headers }
    );
  }

  updateProjectById( id: string, project: Project ) {

    console.log( id, project );

    return this.http.patch(
      `${ this.BASE_URL }/projects/${ id }`,
      project,
      { headers: this.headers }
    );
  }

}
