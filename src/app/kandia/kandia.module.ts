import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KandiaPageRoutingModule } from './kandia-routing.module';

import { KandiaPage } from './kandia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KandiaPageRoutingModule
  ],
  declarations: [KandiaPage]
})
export class KandiaPageModule {}
