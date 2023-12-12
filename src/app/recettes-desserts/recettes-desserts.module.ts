import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecettesDessertsPageRoutingModule } from './recettes-desserts-routing.module';

import { RecettesDessertsPage } from './recettes-desserts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecettesDessertsPageRoutingModule
  ],
  declarations: [RecettesDessertsPage]
})
export class RecettesDessertsPageModule {}
