import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Emp } from '../emp';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  empId: string;
  emp: Emp;
  isEmpAvail: boolean = false;
  updateResponse: string;
  constructor(private empService: EmpService) { }

  ngOnInit() {
  }

  getEmployee(): void {
    this.empService.getEmp(this.empId)
      .subscribe(emp => this.emp = emp);
    this.isEmpAvail = true;
  }

  updateEmployee(): void {
    this.empService.updateEmployee(this.emp)
      .subscribe(resp => this.updateResponse = resp);

  }



}
