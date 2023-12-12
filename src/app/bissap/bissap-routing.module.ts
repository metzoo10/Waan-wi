import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BissapPage } from './bissap.page';

const routes: Routes = [
  {
    path: '',
    component: BissapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BissapPageRoutingModule {}
