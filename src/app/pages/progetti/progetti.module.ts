import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Progetti } from './progetti';
import { ProgettiRoutingModule } from './progetti-routing.module';
import { MaterialModule } from '../../shared/shared/material.module';
import { ProgettoDetail } from './progetto-detail/progetto-detail';



@NgModule({
  declarations: [
    Progetti,
    ProgettoDetail
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProgettiRoutingModule
  ]
})
export class ProgettiModule { }
