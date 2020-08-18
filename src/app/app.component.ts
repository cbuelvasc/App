import { Component, AfterViewInit, OnInit } from '@angular/core';

declare function customInitFunctions();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'App';

  ngOnInit(): void {
    customInitFunctions();
  }
}
