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
    new Currency("Cardano", 0.00, "\\assets\\icon\\ada.svg", "ADA"),

    new Currency("Dogecoin", 0.00, "\\assets\\icon\\doge.svg", "DOGE"),
    new Currency("Polkadot", 0.00, "\\assets\\icon\\dot.svg", "DOT"),
    new Currency("Chainlink", 0.00, "\\assets\\icon\\link.svg", "LINK"),
    new Currency("Tether", 0.00, "\\assets\\icon\\usdt.svg", "USDT"),
    new Currency("Litecoin", 0.00, "\\assets\\icon\\ltc.svg", "LTC"),

    new Currency("Binance Coin", 0.00, "\\assets\\icon\\bnb.svg", "BNB"),
    new Currency("BitTorrent", 0.00, "\\assets\\icon\\btt.svg", "BTT"),
    new Currency("Solana", 0.00, "\\assets\\icon\\sol.svg", "SOL"),
    new Currency("Polygon", 0.00, "\\assets\\icon\\matic.svg", "MATIC"),
    new Currency("NEO", 0.00, "\\assets\\icon\\neo.svg", "NEO"),

    new Currency("EOS", 0.00, "\\assets\\icon\\eos.svg", "EOS"),
    new Currency("Sushi", 0.00, "\\assets\\icon\\sushi.svg", "SUSHI"),
    new Currency("VetChain", 0.00, "\\assets\\icon\\vet.svg", "VET"),
    new Currency("FileCoin", 0.00, "\\assets\\icon\\fil.svg", "FIL"),
    new Currency("Cosmos", 0.00, "\\assets\\icon\\atom.svg", "ATOM"),
  ];

  get currencies() {
    return [...this._currencies];
  }

  constructor() { }
}
