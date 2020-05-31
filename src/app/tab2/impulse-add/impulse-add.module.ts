import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImpulseAddPageRoutingModule } from './impulse-add-routing.module';

import { ImpulseAddPage } from './impulse-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImpulseAddPageRoutingModule
  ],
  declarations: [ImpulseAddPage]
})
export class ImpulseAddPageModule {}
