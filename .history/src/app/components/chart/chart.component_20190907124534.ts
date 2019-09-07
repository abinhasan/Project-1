import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/services/chart.service';
import { Chart } from "chart.js";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chartList: any = [];

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.GetSampleChart();
  }

  GetSampleChart() {
    this.chartList = [];
    this.chartService.GetSampleChart().subscribe((result) => {
      this.chartList = result;
      console.log(this.chartList);
    });
  }

}
