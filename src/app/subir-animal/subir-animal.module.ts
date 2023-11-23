import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubirAnimalPageRoutingModule } from './subir-animal-routing.module';

import { SubirAnimalPage } from './subir-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubirAnimalPageRoutingModule
  ],
  declarations: [SubirAnimalPage]
})
export class SubirAnimalPageModule {}
