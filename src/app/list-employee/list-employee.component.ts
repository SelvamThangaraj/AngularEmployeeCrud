import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  empList: Emp[];
  isEmpAvail: boolean = false;

  constructor(private empService: EmpService) { }

  ngOnInit() {
    this.list();
  }

  list(): void {
    this.empService.listEmployee()
      .subscribe(listEmp => this.empList = listEmp);

    if (undefined != this.empList) {
      console.log("Employee list=>" + this.empList);

      if (this.empList.length > 0) {
        this.isEmpAvail = true;
      }

      console.log("isEmpAvail" + this.isEmpAvail);
    }
  }

}
