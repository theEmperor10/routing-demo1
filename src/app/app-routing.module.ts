import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ DepartmentListComponent } from './department-list/department-list.component';
import{EmployeeListComponent } from './employee-list/employee-list.component';
import{SalaryComponent } from './salary/salary.component';
import{ PageNotFoundComponent } from './page-not-found/page-not-found.component';
import{DepartmentDetailsComponent } from './department-details/department-details.component'

const routes: Routes = [
  {path:'',redirectTo:'/departments',pathMatch:'full'},
  {path:'departments/:id',component:DepartmentDetailsComponent},
  {path: 'departments',component:DepartmentListComponent  },
  {path:'employees',component:EmployeeListComponent},
  {path:'salary',component:SalaryComponent},
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
export const routingComponents=[DepartmentListComponent,
        EmployeeListComponent,
        SalaryComponent,
        DepartmentDetailsComponent,
        PageNotFoundComponent] 
