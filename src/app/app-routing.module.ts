import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';

const routes: Routes = [
  { path: '', component: LayoutsComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'auth', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
