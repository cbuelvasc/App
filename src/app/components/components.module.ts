import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgApexchartsModule } from 'ng-apexcharts';

import { IncreasingComponent } from './increasing/increasing.component';
import { DonutComponent } from './donut/donut.component';


@NgModule({
  declarations: [
    IncreasingComponent,
    DonutComponent
  ],
  exports: [
    IncreasingComponent,
    DonutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgApexchartsModule
  ]
})
export class ComponentsModule { }
