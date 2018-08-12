import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";

@Component({
  selector: "app-age-calculator",
  templateUrl: "./age-calculator.component.html",
  styleUrls: ["./age-calculator.component.css"]
})
export class AgeCalculatorComponent {
  // dates = {};
  myForm: FormGroup;
  // Form state
  loading = false;
  success = false;
  toDate() {
    var today = moment().format("YYYY-MM-DD");
    return today;
  }

  dates = new Date("", "");
  calDay: number;
  calMonth: number;
  calYear: number;

  onSubmit(employeeForm: NgForm) {
    this.dates = employeeForm.value;
    var date1 = moment(this.dates.date1);
    var date2 = moment(this.dates.date2);
    this.calDay = date2.diff(date1, "days");
    this.calMonth = date2.diff(date1, "months");
    this.calYear = date2.diff(date1, "years");
    this.success = true;
  }
}

export class Date {
  constructor(public date1: any, public date2: any) {}
}
