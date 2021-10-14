import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddquoteComponent } from './addquote/addquote.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:"full"},
  {path:'dashboard',component:DashboardComponent},
  {path:'addquote',component:AddquoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
