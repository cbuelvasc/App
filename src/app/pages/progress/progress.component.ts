import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {

  progressOne = 25;
  progressTwo = 45;

  constructor() { }

  ngOnInit(): void {
  }

  get percentageOne(): string {
    return `${this.progressOne}%`;
  }

  get percentageTwo(): string {
    return `${this.progressTwo}%`;
  }
}
