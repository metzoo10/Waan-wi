import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccaraPage } from './accara.page';

const routes: Routes = [
  {
    path: '',
    component: AccaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccaraPageRoutingModule {}
