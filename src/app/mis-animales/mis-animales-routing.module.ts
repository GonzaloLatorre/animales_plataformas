import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisAnimalesPage } from './mis-animales.page';

const routes: Routes = [
  {
    path: '',
    component: MisAnimalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisAnimalesPageRoutingModule {}
