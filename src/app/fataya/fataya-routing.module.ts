import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FatayaPage } from './fataya.page';

const routes: Routes = [
  {
    path: '',
    component: FatayaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FatayaPageRoutingModule {}
