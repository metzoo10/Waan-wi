import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgalakhPageRoutingModule } from './ngalakh-routing.module';

import { NgalakhPage } from './ngalakh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgalakhPageRoutingModule
  ],
  declarations: [NgalakhPage]
})
export class NgalakhPageModule {}
