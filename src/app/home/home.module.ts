import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      { path: 'list', loadChildren: './list/list.module#ListPageModule' },
      { path: 'user', loadChildren: './user/user.module#UserPageModule' },
      { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' }
    ]
  }, {
    path: '',
    redirectTo: 'tabs/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
