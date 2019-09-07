import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/services/chart.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chartList = [];

  LineChart = [];

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.GetSampleChart();

    //this.LineChart = [];
    this.LineChart.push(new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ["jan", "Feb","mar"],
        datasets: [{
          label: 'nuber',
          data: [1, 9,3],
          fill: false,
          lineTension: 0.2,
          borderColor: "red",
          borderWidth: 1,

        }]
      },
      options: {
        title: {
          text: "Line chart",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    }));


  }

  GetSampleChart() {
    this.chartList = [];
    this.chartService.GetSampleChart().subscribe((result) => {
      this.chartList = result;
      console.log(this.chartList.time);
      console.log(this.chartList.value);
    });
  }

}
