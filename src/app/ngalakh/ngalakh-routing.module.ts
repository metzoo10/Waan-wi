import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgalakhPage } from './ngalakh.page';

const routes: Routes = [
  {
    path: '',
    component: NgalakhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgalakhPageRoutingModule {}
