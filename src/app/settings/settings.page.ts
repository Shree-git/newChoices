import { Component, OnInit } from '@angular/core';
import { DarkService } from './dark.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  themeToggle: boolean = false
  constructor(private darkService: DarkService) { 



  }

  ngOnInit() {
  }

  toggle(){
    this.themeToggle = !this.themeToggle
    this.darkService.toggleDarkTheme(this.themeToggle)
  }
}
