import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImpulseDetailPage } from './impulse-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ImpulseDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImpulseDetailPageRoutingModule {}
