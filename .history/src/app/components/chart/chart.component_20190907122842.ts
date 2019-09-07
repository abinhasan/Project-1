import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chartList: any = [];

  constructor(private chartService: ChartService) { }

  ngOnInit() {
  }

  getDistrict(id) {
    this.chartList = [];
    this.loadDistrictSubdistrictService.getDistrict(id).subscribe((result) => {
      this.chartList = result.data.districtInfo;
    });
  }

}
