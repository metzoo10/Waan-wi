import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeignetsPage } from './beignets.page';

const routes: Routes = [
  {
    path: '',
    component: BeignetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeignetsPageRoutingModule {}
