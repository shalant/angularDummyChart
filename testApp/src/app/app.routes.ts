import { Routes, RouterOutlet } from '@angular/router';
import { MychartComponent } from './mychart/mychart.component';
import { MultiSelectComponent } from 'ng-multiselect-dropdown';
import { LineChartComponent } from './line-chart/line-chart.component';
import { LineChart2Component } from './line-chart2/line-chart2.component';

export const routes: Routes = [
    { path: "chart", component: MychartComponent},
    { path: "multi-select", component: MultiSelectComponent},
    { path: "line", component: LineChartComponent },
    { path: "line2", component: LineChart2Component },
];
