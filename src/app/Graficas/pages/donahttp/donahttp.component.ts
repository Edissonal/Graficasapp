import { Component, OnInit } from '@angular/core';
import { GraficasservicesService } from '../../services/graficasservices.service';
import { Color, MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';


@Component({
  selector: 'app-donahttp',
  templateUrl: './donahttp.component.html',
  styles: [
  ]
})
export class DonahttpComponent implements OnInit {

  constructor( private graficasservicesService: GraficasservicesService) { }

  ngOnInit(): void {
    /*this.graficasservicesService.getUsuariosredessociales()
    .subscribe(res => {
      const labels = Object.keys(res);
      const values = Object.values(res);
      this.doughnutChartLabels = labels;
      this.doughnutChartData.push(values);

    })*/
    this.graficasservicesService.getUsuariosredessocialesDonaData()
      .subscribe(({labels,values}) => {
      

        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
      });
  }

  public doughnutChartLabels: Label[] =[]
    /*['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'orders'];*/
  public doughnutChartData: MultiDataSet = [
   // [350, 450, 100,150],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#1EF597',
        '#1E8CE6',
        '#14F7FC',
        '#1431FC',
        '#5913F2',
      ]
    }
  ]

}
