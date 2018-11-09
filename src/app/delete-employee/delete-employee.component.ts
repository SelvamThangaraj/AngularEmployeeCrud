import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  empId: string;
  status: string;
  constructor(private empservice: EmpService) { }

  ngOnInit() {
  }

  deleteEmployee() {
    this.empservice.deleteEmp(this.empId)
      .subscribe(result => this.status = result.toLocaleString());
    console.log(this.status);
  }

}


