import {TaskService} from './task.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CreatetaskComponent} from './createtask/createtask.component';
import {ReporttaskComponent} from './reporttask/reporttask.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {LandingComponent} from './landing/landing.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EdittaskComponent} from './edittask/edittask.component';
import {AuthService} from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreatetaskComponent,
    ReporttaskComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent,
    EdittaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],

  providers: [TaskService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
