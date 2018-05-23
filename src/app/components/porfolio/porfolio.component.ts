import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as jsPDF from 'jspdf';
import { element } from 'protractor';
@Component({
  selector: "app-porfolio",
  templateUrl: "./porfolio.component.html",
  styleUrls: ["./porfolio.component.css"]
})
export class PorfolioComponent implements OnInit {
  @ViewChild("content") content: ElementRef;
  constructor() {}

  ngOnInit() {
  }

  downloadPDF(){
    return xepOnline.Formatter.Format('content', 
    {render: 'download',
    cssStyle:[{fontSize:'12px'}],
    embedLocalImages: true,
    filename: 'Mohammed_Minhaz_Resume',
    pageWidth: 9
  });
  }
}
