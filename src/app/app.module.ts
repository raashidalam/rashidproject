import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{environment} from './../environments/environment';
import {AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';
 import {FormsModule,ReactiveFormsModule} from '@angular/forms';
 import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { FinanceComponent } from './finance/finance.component';
import { ComputerComponent } from './computer/computer.component';
import { ITComponent } from './it/it.component';
import { ECComponent } from './ec/ec.component';
import { MatTableModule } from '@angular/material';
import { ComputerFilterPipe } from './computer/computer-filter.pipe';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import {SocialLoginModule,AuthServiceConfig,GoogleLoginProvider} from 'angular-6-social-login';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    EmployeeComponent,
    DepartmentComponent,
    FinanceComponent,
    ComputerComponent,
    ITComponent,
    ECComponent,
    ComputerFilterPipe,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFireDatabaseModule,
    // SocialLoginModule,
    // AuthServiceConfig,
    // GoogleLoginProvider,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule ,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

