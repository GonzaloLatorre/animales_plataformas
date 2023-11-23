import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'animales',
    loadChildren: () => import('./animales/animales.module').then( m => m.AnimalesPageModule)
  },
  {
    path: 'subir-animal',
    loadChildren: () => import('./subir-animal/subir-animal.module').then( m => m.SubirAnimalPageModule)
  },
  {
    path: '**',
    redirectTo: 'animales',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
