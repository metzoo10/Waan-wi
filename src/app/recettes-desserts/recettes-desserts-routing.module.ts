import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecettesDessertsPage } from './recettes-desserts.page';

const routes: Routes = [
  {
    path: '',
    component: RecettesDessertsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecettesDessertsPageRoutingModule {}
