import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from 'src/app/emp-components/dashboard/dashboard.component';
import { AnimesComponent } from 'src/app/emp-components/animes/animes.component';
import { NovelsComponent } from 'src/app/emp-components/novels/novels.component';
import { KidsComponent } from 'src/app/emp-components/kids/kids.component';
import { EmpNavbarComponent } from 'src/app/emp-components/emp-navbar/emp-navbar.component';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    AnimesComponent,
    NovelsComponent,
    KidsComponent,
    EmpNavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
  ]
})
export class HomeModule { }
