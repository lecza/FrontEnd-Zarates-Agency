import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Service } from '../interfaces/service';
import { ResponseServices } from '../interfaces/response-services';
import { ResponseService } from '../interfaces/response-service';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // Atributos
  BASE_URL: string = environment.baseUrl;
  headers: HttpHeaders;
  token: string;

  constructor( private http: HttpClient ) { 
    const token = localStorage.getItem( 'token' );
    this.token = token ? token : '';
    this.headers = new HttpHeaders().set( 'X-Token', this.token );
  }

  createService( data: Service ) {
    
    return this.http.post<ResponseServices>( 
      `${ this.BASE_URL }/services`, 
      data, 
      { headers: this.headers } 
    );
  }

  getAllServices() {

    return this.http.get<ResponseServices>( 
      `${ this.BASE_URL }/services`,
      { headers: this.headers }
    );
  }

  getServices() {

    return this.http.get<ResponseServices>( 
      `${ this.BASE_URL }/services/all`
    );
  }

  getServiceById( id: string ) {

    return this.http.get<ResponseService>(   
      `${ this.BASE_URL }/services/${ id }`,
      { headers: this.headers }
    ).pipe(
        tap( data => {
          console.log( data );

          return data;
        }),
        map( product => product.data )
      );
  }

  deleteServiceById( id: string ) {

    return this.http.delete(
      `${ this.BASE_URL }/services/${ id }`,
      { headers: this.headers }
    );
  }

  updateServiceById( id: string, service: Service ) {

    console.log( id, service );

    return this.http.patch(
      `${ this.BASE_URL }/services/${ id }`,
      service,
      { headers: this.headers }
    );
  }

}
