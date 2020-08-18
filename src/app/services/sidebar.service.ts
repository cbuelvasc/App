import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: '',
      submenu: [
        {
          title: 'Main',
          url: '/',
        },
        {
          title: 'ProgressBar',
          url: 'progress',
        },
        {
          title: 'Graph',
          url: 'graphOne',
        }
      ]
    }
  ];

  constructor() { }
}
