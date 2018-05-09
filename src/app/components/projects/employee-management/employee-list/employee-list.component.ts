import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../../services/employee.service';
import { Employee } from '../../../../model/employee.model';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
  constructor(
    private employeeService: EmployeeService,
    private tostr: ToastrService) { }

  ngOnInit() {
    this.employeeService.getEmployees()
      .snapshotChanges()
      .subscribe(item => {
        //initialized to empty array
        this.employeeList = [];
        item.forEach(element => {
          //intialized to retrive JSON data (key, data) from inserted data
          var x = element.payload.toJSON();
          x["$key"] = element.key;
          this.employeeList.push(x as Employee);
        });
        this.employeeList.sort(sortByNameAsc)
      });
  }

  onEdit(employee: Employee) {
    this.employeeService.selectedEmployee = Object.assign({}, employee);
  }

  onDelete(key: string) {
    if (confirm("Are you sure you want to deleted this employee ?") == true) {
      this.employeeService.deleteEmployee(key);
      this.tostr.success("Deleted Successfully", "Employee Register");
    }
  }
}

function sortByNameAsc(s1, s2) {
  if (s1.name > s2.name) return 1
  else if (s1.name === s2.name) return 0
  else return -1 // s2.name is before s1.name
}
