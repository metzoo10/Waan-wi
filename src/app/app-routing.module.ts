import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'recettes-plats',
    loadChildren: () => import('./recettes-plats/recettes-plats.module').then( m => m.RecettesPlatsPageModule)
  },
  {
    path: 'recettes-desserts',
    loadChildren: () => import('./recettes-desserts/recettes-desserts.module').then( m => m.RecettesDessertsPageModule)
  },
  {
    path: 'recettes-njogonal',
    loadChildren: () => import('./recettes-njogonal/recettes-njogonal.module').then( m => m.RecettesNjogonalPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'thieboudiene',
    loadChildren: () => import('./thieboudiene/thieboudiene.module').then( m => m.ThieboudienePageModule)
  },
  {
    path: 'yassa',
    loadChildren: () => import('./yassa/yassa.module').then( m => m.YassaPageModule)
  },
  {
    path: 'kandia',
    loadChildren: () => import('./kandia/kandia.module').then( m => m.KandiaPageModule)
  },
  {
    path: 'ngalakh',
    loadChildren: () => import('./ngalakh/ngalakh.module').then( m => m.NgalakhPageModule)
  },
  {
    path: 'bissap',
    loadChildren: () => import('./bissap/bissap.module').then( m => m.BissapPageModule)
  },
  {
    path: 'thiakry',
    loadChildren: () => import('./thiakry/thiakry.module').then( m => m.ThiakryPageModule)
  },
  {
    path: 'fataya',
    loadChildren: () => import('./fataya/fataya.module').then( m => m.FatayaPageModule)
  },
  {
    path: 'accara',
    loadChildren: () => import('./accara/accara.module').then( m => m.AccaraPageModule)
  },
  {
    path: 'beignets',
    loadChildren: () => import('./beignets/beignets.module').then( m => m.BeignetsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
