import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  /** Ruta a los componentes del Modulo Auth */
  { 
    path: 'auth',
    loadChildren: () => import( './auth/auth.module' ).then( module => module.AuthModule )
  },
  /** Ruta a los componentes del Modulo Dashboard */
  {
    path: 'dashboard',
    loadChildren: () => import( './dashboard/dashboard.module' ).then( module => module.DashboardModule )
  },
  {
    path: 'projects',
    component: ProjectsComponent
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
