import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),

  },
  {
    path: 'iamsafe',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
  }
  ,
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    // component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
