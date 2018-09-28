import {LandingComponent} from './landing/landing.component';
import {LoginComponent} from './login/login.component';
import {CreatetaskComponent} from './createtask/createtask.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReporttaskComponent} from './reporttask/reporttask.component';
import {EdittaskComponent} from './edittask/edittask.component';
import {SignupComponent} from './signup/signup.component';

const routes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {
    path: 'landing', component: LandingComponent,
    children: [
      {path: '', component: DashboardComponent, pathMatch: 'full'},
      {path: 'createtask', component: CreatetaskComponent},
      {path: 'edittask/:id', component: EdittaskComponent},
      {path: 'reporttask', component: ReporttaskComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
