import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../../../../services/employee.service";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private tostr: ToastrService
  ) {}

  ngOnInit() {
    // this.employeeService.getEmployees();
    this.resetForm();
  }

  onSubmit(employeeForm: NgForm) {
    // To update user
    if (employeeForm.value.$key == null) {
      this.employeeService.insertEmployee(employeeForm.value);
    } else {
      this.employeeService.updateEmployee(employeeForm.value);
    }

    if (employeeForm) employeeForm.reset();
    this.tostr.success("Summitted Successfully", "Employee Register");
  }

  resetForm(employeeForm?: NgForm) {
    if (employeeForm != null) employeeForm.reset();
    this.employeeService.selectedEmployee = {
      $key: null,
      name: "",
      position: "",
      office: "",
      salary: 0
    };
  }
}
