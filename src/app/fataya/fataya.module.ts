import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FatayaPageRoutingModule } from './fataya-routing.module';

import { FatayaPage } from './fataya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FatayaPageRoutingModule
  ],
  declarations: [FatayaPage]
})
export class FatayaPageModule {}
