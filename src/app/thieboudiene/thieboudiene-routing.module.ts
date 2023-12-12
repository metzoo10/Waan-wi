import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThieboudienePage } from './thieboudiene.page';

const routes: Routes = [
  {
    path: '',
    component: ThieboudienePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThieboudienePageRoutingModule {}
