import { Injectable } from '@angular/core';
import { Currency } from './currency.model';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {
  private _currencies: Currency[] = [
    new Currency("Bitcoin", 0.00, "\\assets\\icon\\btc.svg", "BTC"),
    new Currency("Ethereum", 0.00, "\\assets\\icon\\eth.svg", "ETH"),
    new Currency("XRP", 0.00, "\\assets\\icon\\xrp.svg", "XRP"),
    new Currency("Stellar", 0.00, "\\assets\\icon\\xlm.svg", "XLM"),
    new Currency("Cardano", 0.00, "\\assets\\icon\\ada.svg", "ADA")
  ];

  get currencies() {
    return [...this._currencies];
  }

  constructor() { }
}
