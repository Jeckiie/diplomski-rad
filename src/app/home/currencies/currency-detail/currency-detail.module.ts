import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

import { IonicModule } from '@ionic/angular';

import { CurrencyDetailPageRoutingModule } from './currency-detail-routing.module';

import { CurrencyDetailPage } from './currency-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgApexchartsModule,
    CurrencyDetailPageRoutingModule
  ],
  declarations: [CurrencyDetailPage]
})
export class CurrencyDetailPageModule {}
