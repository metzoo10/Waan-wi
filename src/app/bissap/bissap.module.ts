import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BissapPageRoutingModule } from './bissap-routing.module';

import { BissapPage } from './bissap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BissapPageRoutingModule
  ],
  declarations: [BissapPage]
})
export class BissapPageModule {}
