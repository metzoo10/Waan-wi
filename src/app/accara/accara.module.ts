import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccaraPageRoutingModule } from './accara-routing.module';

import { AccaraPage } from './accara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccaraPageRoutingModule
  ],
  declarations: [AccaraPage]
})
export class AccaraPageModule {}
