import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KandiaPage } from './kandia.page';

const routes: Routes = [
  {
    path: '',
    component: KandiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KandiaPageRoutingModule {}
