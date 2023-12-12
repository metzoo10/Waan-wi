import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThiakryPageRoutingModule } from './thiakry-routing.module';

import { ThiakryPage } from './thiakry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThiakryPageRoutingModule
  ],
  declarations: [ThiakryPage]
})
export class ThiakryPageModule {}
