import { Component, OnInit } from '@angular/core';
import { Currency } from './currency.model';
import { DataService } from 'src/app/services/data.service';
import { CurrenciesService } from './currencies.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.page.html',
  styleUrls: ['./currencies.page.scss'],
})
export class CurrenciesPage implements OnInit {
  loadedCurrencies: Currency[];
  currencyValue: any;

  constructor(private dataService: DataService, private currenciesService: CurrenciesService) { }

  ngOnInit() {
    this.loadedCurrencies = this.currenciesService.currencies;
    for(let currency of this.loadedCurrencies) {
      this.dataService.getSingeSymbolPrice(currency.abbr)
        .subscribe(result => {
          this.currencyValue = result;
          currency.value = this.currencyValue.USD;
        })
    }
  }

}
