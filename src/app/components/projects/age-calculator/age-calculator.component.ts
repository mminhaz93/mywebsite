import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-age-calculator",
  templateUrl: "./age-calculator.component.html",
  styleUrls: ["./age-calculator.component.css"]
})
export class AgeCalculatorComponent implements OnInit {

  months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  days : string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31"
  ]

 year : number ;  

  constructor(){
    var today = new Date();
    this.year = today.getFullYear();
  }

  ngOnInit() {
    
  }
}
