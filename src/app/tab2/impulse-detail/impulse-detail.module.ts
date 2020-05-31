import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImpulseDetailPageRoutingModule } from './impulse-detail-routing.module';

import { ImpulseDetailPage } from './impulse-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImpulseDetailPageRoutingModule
  ],
  declarations: [ImpulseDetailPage]
})
export class ImpulseDetailPageModule {}
