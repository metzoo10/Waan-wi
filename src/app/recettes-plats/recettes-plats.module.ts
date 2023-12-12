import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecettesPlatsPageRoutingModule } from './recettes-plats-routing.module';

import { RecettesPlatsPage } from './recettes-plats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecettesPlatsPageRoutingModule
  ],
  declarations: [RecettesPlatsPage]
})
export class RecettesPlatsPageModule {}
