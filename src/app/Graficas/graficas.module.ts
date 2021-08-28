import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonahttpComponent } from './pages/donahttp/donahttp.component';
import { GraficabarraComponent } from './components/graficabarra/graficabarra.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDobleComponent,
    DonaComponent,
    DonahttpComponent,
    GraficabarraComponent
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    ChartsModule,
    
  ]
})
export class GraficasModule { }
