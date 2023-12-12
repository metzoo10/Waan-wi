import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThiakryPage } from './thiakry.page';

const routes: Routes = [
  {
    path: '',
    component: ThiakryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThiakryPageRoutingModule {}
