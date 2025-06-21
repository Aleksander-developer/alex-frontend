import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contatti } from './contatti';
import { ContattiRoutingModule } from './contatti-routing.module';
import { MaterialModule } from '../../shared/shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Contatti
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    ContattiRoutingModule
  ]
})
export class ContattiModule { }
