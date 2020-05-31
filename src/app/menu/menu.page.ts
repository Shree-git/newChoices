import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { AccountService } from '../settings/account/account.service';

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



export class MenuPage{

  

}
