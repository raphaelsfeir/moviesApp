import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomePageModule'
    },
    {
        path: 'tabs/list',
        loadChildren: './home/list/list.module#ListPageModule'
    },
    {
        path: 'tabs/settings',
        loadChildren: './home/settings/settings.module#SettingsPageModule'
    },
    {
        path: 'tabs/user',
        loadChildren: './home/user/user.module#UserPageModule'
    },
  { path: 'single/:id', loadChildren: './single/single.module#SinglePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
