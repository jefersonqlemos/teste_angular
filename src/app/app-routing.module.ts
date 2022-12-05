import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListProductComponent } from './product/list-product/list-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { CreateProductComponent } from './product/create-product/create-product.component';

import { ListCompanyComponent } from './company/list-company/list-company.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
import { CreateCompanyComponent } from './company/create-company/create-company.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'list-product/:id', component: ListProductComponent},
  {path: 'edit-product', component: EditProductComponent},
  {path: 'create-product', component: CreateProductComponent},

  {path: 'list-company', component: ListCompanyComponent},
  {path: 'edit-company', component: EditCompanyComponent},
  {path: 'create-company', component: CreateCompanyComponent},

  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
