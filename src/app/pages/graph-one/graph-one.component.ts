import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-graph-one',
  templateUrl: './graph-one.component.html',
  styles: [
  ]
})
export class GraphOneComponent implements OnInit {

  public labels: string[] = ['Pan', 'Sodas', 'Salsas', 'Salchichas', 'Papitas'];
  public series: number[] = [44, 55, 13, 43, 22];

  constructor() {
  }

  ngOnInit(): void {
  }

}
