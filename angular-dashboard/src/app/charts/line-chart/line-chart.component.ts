import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [32, 14, 46 ,89, 11 ,25], label: 'Sentiment Analysis' },
  { data: [36, 55, 79 ,22, 36, 50], label: 'Image Recognition' },
  { data: [99, 1, 54, 33, 32, 12], label: 'Forecasting' }
];

const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true
  };
  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;    

  ngOnInit() {
  }

}
