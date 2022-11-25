import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { IGrafica } from 'src/app/interfaces/graficas.interface';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {


  public hayData: boolean = false;

  
  public doughnutChartLabels!: string[];
  public dChartData!:ChartData<'doughnut'>;

  constructor( private service: GraficasService) { }

  ngOnInit(): void {  
      this.service.getGraficas().subscribe(resp=>{
        const labels = Object.keys(resp);
        this.doughnutChartLabels = labels;
        const { facebook, youtube, whatsapp,facebook_messenger,instagram} = resp;
         
         this.dChartData = {
          labels: this.doughnutChartLabels,
          datasets: [
            { data: [ facebook, youtube, whatsapp, facebook_messenger, instagram] }
          ]
        };
        this.hayData = true;
      })
     
      
  }



  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }




}
