import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';

import { EmpService } from '../emp.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  emp: Emp;
  id: String;

  constructor(private empService: EmpService) { }

  ngOnInit() {
    this.emp = new Emp();
  }

  save(): void {
    console.log("submit button clicked" + this.emp.name);

    this.empService.saveEmployee(this.emp).subscribe(id => this.id = id);
    console.log("this.id=>" + this.id);
  }

}
