import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Progetti } from './progetti';
import { ProgettoDetail } from './progetto-detail/progetto-detail';

const routes: Routes = [
  { path: '', component: Progetti },
  { path: ':id', component: ProgettoDetail }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProgettiRoutingModule { }
