import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contatti } from './contatti';

const routes: Routes = [
  { path: '', component: Contatti }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContattiRoutingModule { }
