import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubirAnimalPage } from './subir-animal.page';

const routes: Routes = [
  {
    path: '',
    component: SubirAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubirAnimalPageRoutingModule {}
