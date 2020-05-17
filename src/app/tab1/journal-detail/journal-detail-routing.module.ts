import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalDetailPage } from './journal-detail.page';

const routes: Routes = [
  {
    path: '',
    component: JournalDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalDetailPageRoutingModule {}
