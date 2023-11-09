import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /** Ruta a los componentes del Modulo Auth */
  { 
    path: 'auth',
    loadChildren: () => import( './auth/auth.module' ).then( module => module.AuthModule )
  },
  /** Ruta para la redireccion de rutas desconocidas */
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
