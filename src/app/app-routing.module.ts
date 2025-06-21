import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'progetti', loadChildren: () => import('./pages/progetti/progetti.module').then(m => m.ProgettiModule) },
  { path: 'chi-sono', loadChildren: () => import('./pages/chi-sono/chi-sono.module').then(m => m.ChiSonoModule) },
  { path: 'contatti', loadChildren: () => import('./pages/contatti/contatti.module').then(m => m.ContattiModule) },
  { path: 'servizi', loadChildren: () => import('./pages/servizi/servizi.module').then(m => m.ServiziModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // ✅ Abilita scroll in alto automatico
      anchorScrolling: 'enabled'            // (facoltativo) supporto per anchor link
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
