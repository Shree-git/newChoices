import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JournalAddPageRoutingModule } from './journal-add-routing.module';

import { JournalAddPage } from './journal-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournalAddPageRoutingModule
  ],
  declarations: [JournalAddPage]
})
export class JournalAddPageModule {}
