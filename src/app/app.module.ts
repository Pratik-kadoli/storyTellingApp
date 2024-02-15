import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeListComponent } from './emp-components/employee-list/employee-list.component';
import { MaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ApiService } from './services/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './popups/add-employee/add-employee.component';
import { DialogComponent } from './popups/dialog/dialog.component';
import { ConfirmationComponent } from './popups/confirmation/confirmation.component';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from 'src/firebase-config';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ApiServiceService } from './api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeLoginComponent,
    EmployeeListComponent,
    AddEmployeeComponent,  
    DialogComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [ApiService],
  entryComponents : [AddEmployeeComponent,DialogComponent,ConfirmationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private apiService: ApiServiceService){
    this.apiService.fetchData().subscribe(data => {
      if (data.condition) {
        // Import ConditionalModule dynamically if condition is met
        import('./another-module/another-module.module').then((mod) => {
          AppModule.imports.push(mod.AnotherModuleModule);
        });
      }
    });
  }
  static imports: any[] = [];
}
