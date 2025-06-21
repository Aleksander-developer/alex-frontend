import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiSono } from './chi-sono';
import { ChiSonoRoutingModule } from './chi-sono-routing.module';
import { MaterialModule } from '../../shared/shared/material.module';
import { MatChipsModule } from '@angular/material/chips';
import { SharedModule } from "../../shared/shared/shared.module";

@NgModule({
  declarations: [
    ChiSono
  ],
  imports: [
    CommonModule,
    MatChipsModule, // 🔥 Aggiunto esplicitamente
    MaterialModule,
    ChiSonoRoutingModule,
    SharedModule
]
})
export class ChiSonoModule { }
