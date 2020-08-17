import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increasing',
  templateUrl: './increasing.component.html',
  styles: [
  ]
})
export class IncreasingComponent implements OnInit {

  @Input() progress = 50;
  @Input() btnClassMinus = 'btn-danger';
  @Input() btnClassPlus = 'btn-success';

  @Output() value: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.btnClassMinus = `btn ${this.btnClassMinus}`;
    this.btnClassPlus = `btn ${this.btnClassPlus}`;
  }

  changeValue(value: number): number {
    if (this.progress >= 100 && value >= 0) {
      this.value.emit(100);
      return this.progress = 100;
    }

    if (this.progress <= 0 && value < 0) {
      this.value.emit(0);
      return this.progress = 0;
    }

    this.progress = this.progress + value;
    this.value.emit(this.progress);
  }

  onChange(value: number): void {
    if (value >= 100) {
      this.progress = 100;
    } else if (value <= 0) {
      this.progress = 0;
    } else {
      this.progress = value;
    }
    this.value.emit(this.progress);
  }

}
