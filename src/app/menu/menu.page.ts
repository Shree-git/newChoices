import { Component, OnInit } from '@angular/core';

export interface Page{
  title;
  url;
  icon;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})



export class MenuPage implements OnInit {

  pages: Page[] = [{
    title: 'Journal',
    url: '/tabs/tab1',
    icon: 'journal'
  },{
    title: 'Journal',
    url: '/tabs/tab2',
    icon: 'stats-chart'
  },{
    title: 'Journal',
    url: '/tabs/tab3',
    icon: 'calendar'
  }]
  constructor() { }

  ngOnInit() {
  }

}
