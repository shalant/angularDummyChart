import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MasterService } from '../services/master.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
Chart.register(...registerables);

@Component({
  selector: 'app-mychart',
  standalone: true,
  imports: [],
  templateUrl: './mychart.component.html',
  styleUrl: './mychart.component.css'
})

export class MychartComponent implements OnInit {

  constructor(private service: MasterService) {}

  chartData: any;
  labelData: any[] = [];
  realData: any[] = [];
  colorData: any[] = [];

  ngOnInit(): void {
    this.service.GetChartInfo().subscribe(result => {
      this.chartData = result;
      if(this.chartData != null) {
        for(let i=0; i < this.chartData.length; i++) {
          this.labelData.push(this.chartData[i].year)
          this.realData.push(this.chartData[i].amount)
          this.colorData.push(this.chartData[i].colorcode)
        }
        this.RenderChart(this.labelData, this.realData, this.colorData, 'bar', 'barchart');
        this.RenderChart(this.labelData, this.realData, this.colorData, 'pie', 'piechart');
        this.RenderChart(this.labelData, this.realData, this.colorData, 'doughnut', 'doughnutchart');
        this.RenderChart(this.labelData, this.realData, this.colorData, 'polarArea', 'polarareachart');
        this.RenderChart(this.labelData, this.realData, this.colorData, 'radar', 'radarchart');

      }
    });
    this.RenderBubblechart();
    this.RenderScatterchart();
  }

  RenderChart(labelData:any, mainData:any, colorData:any, type: any, id:any) {
    // const myChart = new Chart("piechart", {
    //   type: 'bar',
    const myChart = new Chart(id, {
      type: type,
      data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels: labelData,
        datasets: [{
          label: '# of Votes',
          // data: [12, 19, 3, 5, 2, 3],
          data: mainData,
          // backgroundColor: [
          //   'rgba(255,99,132,0.2)',
          //   'rgba(54,162,235,0.2)',
          //   'rgba(255,206,86,0.2)',
          //   'rgba(75,192,192,0.2)',
          //   'rgba(153,102,255,0.2)',
          //   'rgba(255,159,64,0.2)',
          // ],
          backgroundColor: colorData,
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54,162,235,1)',
            'rgba(255,206,86,1)',
            'rgba(75,192,192,1)',
            'rgba(153,102,255,1)',
            'rgba(255,159,64,1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  RenderBubblechart(){
    const data = {
      datasets: [{
        label: 'Scatter Dataset',
        data: [{
          x: -10,
          y: 0
        }, {
          x: 0,
          y: 10
        }, {
          x: 10,
          y: 5
        }, {
          x: 0.5,
          y: 5.5
        }],
        backgroundColor: 'rgb(255, 99, 132)'
      }]
    };
    const myChart = new Chart('scatterchart', {
      type: 'scatter',
      data: data,
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
          }
        }
      }
    });
  }

  RenderScatterchart(){
    const data = {
      datasets: [{
        label: 'First Dataset',
        data: [{
          x: 20,
          y: 30,
          r: 15
        }, {
          x: 40,
          y: 10,
          r: 10
        }],
        backgroundColor: 'rgb(255, 99, 132)'
      }]
    };
    const myChart = new Chart('bubchart', {
      type: 'bubble',
      data: data,
      options: {
        
      }
    });
  }

}
