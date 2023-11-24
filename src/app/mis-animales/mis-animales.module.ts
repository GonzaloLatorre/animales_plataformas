import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisAnimalesPageRoutingModule } from './mis-animales-routing.module';

import { MisAnimalesPage } from './mis-animales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisAnimalesPageRoutingModule
  ],
  declarations: [MisAnimalesPage]
})
export class MisAnimalesPageModule {}
