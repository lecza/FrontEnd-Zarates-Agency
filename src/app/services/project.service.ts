import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ResponseProjects } from '../interfaces/response-projects';
import { Project } from '../interfaces/project';

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
}
