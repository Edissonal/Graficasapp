import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet, Color } from 'ng2-charts';
import { ChartType } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales','orders'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100,150],
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

  constructor() { }

  ngOnInit(): void {
  }

}
