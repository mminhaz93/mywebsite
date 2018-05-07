import { Injectable } from "@angular/core";
import { Employee } from "../model/employee.model";
//Firebase
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();

  constructor(private firedb: AngularFireDatabase) {}

  getEmployees() {
    this.employeeList = this.firedb.list("employees");
    return this.employeeList;
  }

  insertEmployee(employee: Employee) {
    this.employeeList.push({
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary
    });
  } 

  updateEmployee(employee: Employee) {
    this.employeeList.update(
    employee.$key, 
    {
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary
    }
  );
  }

  deleteEmployee($key: string){
    this.employeeList.remove($key);
  }
}
