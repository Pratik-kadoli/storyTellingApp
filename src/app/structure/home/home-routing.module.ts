import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../emp-components/dashboard/dashboard.component';
import { AnimesComponent } from '../../emp-components/animes/animes.component';
import { KidsComponent } from '../../emp-components/kids/kids.component';
import { NovelsComponent } from '../../emp-components/novels/novels.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent,
    children : [
      {
        path : 'dashboard',
        component : DashboardComponent
      },
      {
        path : 'animes',
        component : AnimesComponent
      },
      {
        path : 'kids',
        component : KidsComponent
      },
      {
        path : 'novels',
        component : NovelsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
