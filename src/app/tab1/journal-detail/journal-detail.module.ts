import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JournalDetailPageRoutingModule } from './journal-detail-routing.module';

import { JournalDetailPage } from './journal-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournalDetailPageRoutingModule
  ],
  declarations: [JournalDetailPage]
})
export class JournalDetailPageModule {}
