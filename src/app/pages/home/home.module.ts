import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './home';
import { MaterialModule } from '../../shared/shared/material.module';
import { HomeRoutingModule } from './home-routing.module'; // <-- aggiunto RouterModule
import { SharedModule } from '../../shared/shared/shared.module';



@NgModule({
  declarations: [
    Home
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    HomeRoutingModule // 👈 usi il modulo routing separato
  ]
})
export class HomeModule { }
