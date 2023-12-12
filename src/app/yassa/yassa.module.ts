import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YassaPageRoutingModule } from './yassa-routing.module';

import { YassaPage } from './yassa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YassaPageRoutingModule
  ],
  declarations: [YassaPage]
})
export class YassaPageModule {}
