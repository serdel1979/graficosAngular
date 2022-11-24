import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent  {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() line: boolean = false;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public barChartType: ChartType = 'line';
  public barChartPlugins = [];

  @Input() labels : string[] = [
  //  '1962', '1972', '1982', '1992', '2002', '2012', '2022'
  ];

 
  public barChartData: ChartData<'bar'> = {
    labels : this.labels,
    datasets:[
       { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
       { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' },
       { data: [ 10, 48, 40, 19, 86, 15, 20 ], label: 'Series C' }
    ]
  };
  constructor() { }

  ngOnInit(): void {
    this.line?this.barChartType='line':this.barChartType='bar';
  }


  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }



}
