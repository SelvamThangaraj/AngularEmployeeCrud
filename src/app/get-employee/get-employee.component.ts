import { Component, OnInit } from '@angular/core';
import { HttpParams } from '../../../node_modules/@angular/common/http';
import { EmpService } from '../emp.service';
import { Emp } from '../emp';
@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {
  emp: Emp;
  empId: string;
  isEmpAvail: boolean = true;

  constructor(private empService: EmpService) { }

  ngOnInit() {
  }

  getEmployee(): void {
    this.empService.getEmp(this.empId)
      .subscribe(emp => this.emp = emp);
    this.isEmpAvail = false;
  }
}
