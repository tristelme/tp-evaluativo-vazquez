import { NgModule } from '@angular/core';
import { SharedRoutingModule } from './shared-routing.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavbarComponent } from './componetes/navbar/navbar.component';
import { FooterComponent } from './componetes/footer/footer.component';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
 ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ]

})
export class SharedModule { }
