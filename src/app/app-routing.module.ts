import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/page/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule) },
  { path: 'producto', loadChildren: () => import('./modules/producto/producto.module').then(m => m.ProductoModule) },
  { path: 'autentificacion', loadChildren: () => import('./modules/autentificacion/autentificacion.module').then(m => m.AutentificacionModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
