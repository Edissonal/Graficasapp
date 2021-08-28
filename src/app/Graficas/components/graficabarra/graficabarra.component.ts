import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graficabarra',
  templateUrl: './graficabarra.component.html',
  styles: [
  ]
})
export class GraficabarraComponent implements OnInit {

  @Input() horizontal: boolean = false;
  public barChartOptions: ChartOptions = {
    responsive: true
  };

  @Input() barChartLabels: Label[] = [/*'2020', '2021', '2022', '2023', '2024', '2025', '2026'*/
                                          
                                     ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;


  @Input() barChartData: ChartDataSets[] = [
  /*  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A',backgroundColor:'#ED28A1',hoverBackgroundColor:'red' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B',backgroundColor:'#EB2AF7' ,hoverBackgroundColor:'red'},
    { data: [8, 33, 20, 70, 50, 40, 100], label: 'Series C',backgroundColor:'#4028ED',hoverBackgroundColor:'red' },*/
    
  ];


  constructor() {

  }

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartType = 'horizontalBar';
    }
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];

    this.barChartData[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];

    this.barChartData[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ]
  }


}
