import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { HomeModule } from './structure/home/home.module';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login', component: EmployeeLoginComponent,
  },
  {
    path: '', 
    loadChildren : () => import('./structure/home/home.module')
    .then( m => m.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
