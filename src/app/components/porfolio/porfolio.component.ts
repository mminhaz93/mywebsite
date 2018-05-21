import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-porfolio",
  templateUrl: "./porfolio.component.html",
  styleUrls: ["./porfolio.component.css"]
})
export class PorfolioComponent implements OnInit {
  @ViewChild("chart") el: ElementRef;
  constructor() {}

  ngOnInit() {
 
  }
}
