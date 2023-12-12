import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YassaPage } from './yassa.page';

const routes: Routes = [
  {
    path: '',
    component: YassaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YassaPageRoutingModule {}
