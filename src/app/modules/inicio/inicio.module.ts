import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { ComponentsComponent } from './components/components.component';
import { PagesComponent } from './pages/pages.component';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    ComponentsComponent,
    PagesComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
