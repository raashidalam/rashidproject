import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { FinanceComponent } from './finance/finance.component';
import { ComputerComponent } from './computer/computer.component';
import { ITComponent } from './it/it.component';
import { ECComponent } from './ec/ec.component';
import { HomeComponent } from './home/home.component';;

const routes: Routes = [
//   {path:'home',component:HomeComponent,

//  children:[
   {path:'department',component: DepartmentComponent,
   children:[
   {path:'computer',component:ComputerComponent},
   {path:'it',component:ITComponent},
   {path:'ec',component:ECComponent}
   ]
 
},
  {path:'employee',component:EmployeeComponent},
  {path:'finance',component:FinanceComponent },
  
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[DepartmentComponent,
  EmployeeComponent,
  FinanceComponent,
  ComputerComponent ,
  ITComponent,
  ECComponent ,
  HomeComponent
    ]
