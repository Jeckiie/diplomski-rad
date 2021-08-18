import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyDetailPage } from './currency-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CurrencyDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrencyDetailPageRoutingModule {}
