import { ProdutoDetailsPage } from './../produto-details/produto-details.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagesPageRoutingModule } from './pages-routing.module';

import { MenuPage } from './../menu/menu.page';
import { PagesPage } from './pages.page';
import { HomePage } from './../home/home.page';
import { ProdutoByCategoriaPage } from '../produto-by-categoria/produto-by-categoria.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagesPageRoutingModule
  ],
  declarations: [HomePage,PagesPage, MenuPage,ProdutoByCategoriaPage,ProdutoDetailsPage]
})
export class PagesPageModule {}
