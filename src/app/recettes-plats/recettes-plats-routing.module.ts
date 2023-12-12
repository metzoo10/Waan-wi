import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecettesPlatsPage } from './recettes-plats.page';

const routes: Routes = [
  {
    path: '',
    component: RecettesPlatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecettesPlatsPageRoutingModule {}
