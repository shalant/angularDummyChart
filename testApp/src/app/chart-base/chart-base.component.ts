import { Component, OnInit } from '@angular/core';
import { ChartService } from '../charts/chart.service';

@Component({
  selector: 'app-chart-base',
  standalone: true,
  imports: [],
  templateUrl: './chart-base.component.html',
  styleUrl: './chart-base.component.css'
})

export class ChartBaseComponent implements OnInit {

  public chart: any;
  private chartInfo: any;
  private labeldata: any[] = [];
  private realdata: any[] = [];
  private colordata: any[] = [];

  constructor(public service: ChartService) {}

  ngOnInit(): void {
    this.service.getChartInfo().subscribe((response) => {
      this.chartInfo = response;
      if(this.chartInfo != null) {
        for(let i = 0; i < this.chartInfo.length; i++) {
          this.labeldata.push(this.chartInfo[i].year);
          this.realdata.push(this.chartInfo[i].amount);
          this.colordata.push(this.chartInfo[i].colorcode);
        }
        this.createChart( this.labeldata, this.realdata, this.colordata);
      }
    })
  }

  createChart(labelData: any, realData: any, colorData: any) {}
}
