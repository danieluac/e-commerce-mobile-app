import { ProdutoDetailsPage } from './../produto-details/produto-details.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from '../home/home.page';
import { ProdutoByCategoriaPage } from '../produto-by-categoria/produto-by-categoria.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: "home"
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'produto-details/:produto',
    component: ProdutoDetailsPage
  },
  {
    path: 'produto-by-categoria/:categoria',
    component : ProdutoByCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
