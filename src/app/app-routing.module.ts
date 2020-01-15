import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './views/layout/header/header.component';
import { HomeComponent } from './views/layout/home/home.component';


const routes: Routes = [
  { path: 'header',      component: HeaderComponent },
  { path: 'home',      component: HomeComponent },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
