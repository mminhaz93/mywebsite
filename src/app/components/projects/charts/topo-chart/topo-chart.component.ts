import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as _ from 'lodash'
import { ChartService } from '../../../../services/chart.service';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-topo-chart',
  templateUrl: './topo-chart.component.html',
  styleUrls: ['./topo-chart.component.css']
})
export class TopoChartComponent implements OnInit {
  @ViewChild('chart') el: ElementRef; // referencing #chart from html
  constructor(private chartService: ChartService) {

  }
  ngOnInit() {
    this.chartService.getData('charts').valueChanges()
      .take(1)
      .subscribe(data => {
        // console.log(data)
        this.topoChart(data)
      })
  }

  topoChart(data) {
    var zdata = [
      {
        z: data,
        type: "surface"
      }
    ];

    const element = this.el.nativeElement;

    const layout = {
      title: 'Mt Bruno Elevation',
      autosize: true,
      margin: {
        l: 65,
        r: 50,
        b: 65,
        t: 90,
      }
    };

    Plotly.plot(element, zdata, layout);
  }
}
