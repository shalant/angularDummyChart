import { Component } from '@angular/core';
import { ChartService } from '../charts/chart.service';
import { ChartBaseComponent } from '../chart-base/chart-base.component';

@Component({
  selector: 'app-line-chart2',
  standalone: true,
  imports: [],
  templateUrl: './line-chart2.component.html',
  styleUrl: './line-chart2.component.css'
})

export class LineChart2Component extends ChartBaseComponent {

  public constructor(public override service: ChartService) {
    super(service)
  }

  override createChart(labelData: any, realData: any, colorData: any): void {
    this.chart = new Chart('MyChart', {
      
    })
  }
}
