import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'insurance', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'insurance',
    loadChildren: () => import('./insurance/insurance.module').then( m => m.InsurancePageModule)
  },
  {
    path: 'file-upload',
    loadChildren: () => import('./file-upload/file-upload.module').then( m => m.FileUploadPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
