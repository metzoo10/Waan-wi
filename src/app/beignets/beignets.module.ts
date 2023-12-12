import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeignetsPageRoutingModule } from './beignets-routing.module';

import { BeignetsPage } from './beignets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeignetsPageRoutingModule
  ],
  declarations: [BeignetsPage]
})
export class BeignetsPageModule {}
