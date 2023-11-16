import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs';

export const verifyAuthGuard: CanActivateFn = ( route, state ) => {

  /** Inyeccion de dependencias cuando no hay constructor, cuando tenemos una funcion */
  const authService = inject( AuthService );



  /** El Guard siempre devuelve un valor Booleano */

  return authService.verifyToken();   // true / false
  return ( localStorage.getItem( 'token' ) != null ) ? true : false;
};
