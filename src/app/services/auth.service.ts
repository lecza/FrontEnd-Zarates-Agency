import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../interfaces/user';
import { ResponseAuth } from '../interfaces/response-auth';
import { catchError, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL: string = environment.baseUrl;

  constructor( 
    private http: HttpClient, 
    private router: Router
  ) { }
  
  register( newUser: User ) {
    const URL = `${ this.BASE_URL }/auth/register`;
    // console.log( newUser );         // { name: 'dasdasda', username: 'gc@test.com', password: '123456'}

    // Ver interface <ResponseAuth>
    // {
    //   "ok": true,
    //   "msg": "Usuario registrado exitosamente"
    // }

    return this.http.post<ResponseAuth>( URL, newUser );
  }

  login( credentials: User ) {
    const URL = `${ this.BASE_URL }/auth/login`;

    return this.http.post<ResponseAuth>( URL, credentials )
      .pipe(
        tap( ( response: ResponseAuth ) => {
          localStorage.setItem( 'token', response.token! );
          
          // this.router.navigateByUrl( '/dashboard' );
          this.router.navigate( [ 'dashboard' ] );
        }),
        map( ( response: ResponseAuth ) => response.ok ),
        catchError( error => {
          return of( false );
        })
      );
  }

}
