import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecettesNjogonalPage } from './recettes-njogonal.page';

const routes: Routes = [
  {
    path: '',
    component: RecettesNjogonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecettesNjogonalPageRoutingModule {}
