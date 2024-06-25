import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioModule } from './inicio.module';
const routes: Routes = [
  {
    path: "",component:InicioModule
  },
  {
    path: "inicio",component:InicioModule
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
