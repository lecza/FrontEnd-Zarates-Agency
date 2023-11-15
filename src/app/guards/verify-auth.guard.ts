import { CanActivateFn } from '@angular/router';

export const verifyAuthGuard: CanActivateFn = (route, state) => {

  /** El Guard siempre devuelve un valor Booleano */
  return ( localStorage.getItem( 'token' ) != null ) ? true : false;
};
