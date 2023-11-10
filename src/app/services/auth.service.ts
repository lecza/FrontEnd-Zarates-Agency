import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../interfaces/user';
import { ResponseAuth } from '../interfaces/response-auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }
    BASE_URL: string = environment.baseUrl;

  register( newUser: User ) {
    const URL = `${ this.BASE_URL }/auth/register`;
    // console.log( newUser );         // { name: 'dasdasda', username: 'gc@test.com', password: '123456'}

    return this.http.post<ResponseAuth>( URL, newUser );

    // Ver interface <ResponseAuth>
    // {
    //   "ok": true,
    //   "msg": "Usuario registrado exitosamente"
    // }
  }

}
