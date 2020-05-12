import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './views/layout/header/header.component';
import { HomeComponent } from './views/layout/home/home.component';
import { ServicesComponent } from './views/services/services.component';
import { SearchComponent } from './views/search/search.component';
import { HomedashComponent } from './views/dashboard/homedash/homedash.component';
import { DbookingComponent } from './views/dashboard/dbooking/dbooking.component';
import { ServiceComponent } from './views/service/service.component';
import { FaqComponent } from './views/faq/faq.component';


const routes: Routes = [
  { path: 'services',      component: ServicesComponent },
  { path: 'service/:id',      component: ServiceComponent },
  { path: 'FAQ',      component: FaqComponent },
  { path: 'home',      component: HomeComponent },
  { path: 'search',      component: SearchComponent },
  { path: 'services/:id',      component: ServicesComponent },

  { path: 'dashboard', loadChildren: '../../projects/dashboard/src/app/app.module#DashSharedModule'},
  // { path: 'dashboard/booking',      component: DbookingComponent },

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
