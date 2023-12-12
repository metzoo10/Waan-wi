import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThieboudienePageRoutingModule } from './thieboudiene-routing.module';

import { ThieboudienePage } from './thieboudiene.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThieboudienePageRoutingModule
  ],
  declarations: [ThieboudienePage]
})
export class ThieboudienePageModule {}
