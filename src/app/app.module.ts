import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';

import { HttpClientModule }    from '@angular/common/http';

const paths: Routes = [
  { path: 'deleteemp', component: DeleteEmployeeComponent },
  { path: 'addemp', component: AddEmployeeComponent },
  { path: 'updateemp', component: UpdateEmployeeComponent },
  { path: 'getemp', component: GetEmployeeComponent },
  { path: 'listemp', component: ListEmployeeComponent }
]



@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    UpdateEmployeeComponent,
    GetEmployeeComponent,
    ListEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(paths),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
