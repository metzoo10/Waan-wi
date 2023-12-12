import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecettesNjogonalPageRoutingModule } from './recettes-njogonal-routing.module';

import { RecettesNjogonalPage } from './recettes-njogonal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecettesNjogonalPageRoutingModule
  ],
  declarations: [RecettesNjogonalPage]
})
export class RecettesNjogonalPageModule {}
