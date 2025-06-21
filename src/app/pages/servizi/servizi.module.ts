import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Servizi } from './servizi';
import { ServiziRoutingModule } from './servizi-routing.module';
import { MaterialModule } from '../../shared/shared/material.module';
import { SharedModule } from '../../shared/shared/shared.module';



@NgModule({
  declarations: [
    Servizi
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ServiziRoutingModule
  ]
})
export class ServiziModule { }
