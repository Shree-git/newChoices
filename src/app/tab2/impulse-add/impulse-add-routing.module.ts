import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImpulseAddPage } from './impulse-add.page';

const routes: Routes = [
  {
    path: '',
    component: ImpulseAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImpulseAddPageRoutingModule {}
