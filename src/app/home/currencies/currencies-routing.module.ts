import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrenciesPage } from './currencies.page';

const routes: Routes = [
  {
    path: '',
    component: CurrenciesPage
  },
  {
    path: ':currencyName',
    loadChildren: () => import('./currency-detail/currency-detail.module').then( m => m.CurrencyDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrenciesPageRoutingModule {}
