import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { MainComponent } from './pages/main/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { NewProductComponent } from './pages/products/new-product/new-product.component';
import { UpdateProductComponent } from './pages/products/update-product/update-product.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NewProjectComponent } from './pages/projects/new-project/new-project.component';
import { UpdateProjectComponent } from './pages/projects/update-project/update-project.component';
import { ServicesComponent } from './pages/services/services/services.component';
import { NewServiceComponent } from './pages/services/services/new-service/new-service.component';
import { UpdateServiceComponent } from './pages/services/services/update-service/update-service.component';


@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    ProductsComponent,
    NewProductComponent,
    UpdateProductComponent,
    ProjectsComponent,
    NewProjectComponent,
    UpdateProjectComponent,
    ServicesComponent,
    NewServiceComponent,
    UpdateServiceComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
