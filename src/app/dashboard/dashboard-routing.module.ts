import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { verifyAuthGuard } from '../guards/verify-auth.guard';
import { NewProductComponent } from './pages/products/new-product/new-product.component';
import { UpdateProductComponent } from './pages/products/update-product/update-product.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NewProjectComponent } from './pages/projects/new-project/new-project.component';
import { UpdateProjectComponent } from './pages/projects/update-project/update-project.component';
import { ServicesComponent } from './pages/services/services/services.component';
import { NewServiceComponent } from './pages/services/services/new-service/new-service.component';
import { UpdateServiceComponent } from './pages/services/services/update-service/update-service.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/new', component: NewProductComponent },
      { path: 'products/update/:id', component: UpdateProductComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'projects/new', component: NewProjectComponent },
      { path: 'projects/update/:id', component: UpdateProjectComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'services/new', component: NewServiceComponent },
      { path: 'services/update/:id', component: UpdateServiceComponent }
    ],
    canActivate: [ verifyAuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
