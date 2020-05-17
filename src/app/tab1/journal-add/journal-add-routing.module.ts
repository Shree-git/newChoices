import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalAddPage } from './journal-add.page';

const routes: Routes = [
  {
    path: '',
    component: JournalAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalAddPageRoutingModule {}
