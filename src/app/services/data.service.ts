import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private api_key: string = "e50d12f2b7bc6d157cbf53701d72a3e0842034251f040d2dde0a5cfaeb90deb4";
  result: any;

  constructor(private http: HttpClient) {}

  getHourlyPair(currency: string) {
    return this.http.get("https://min-api.cryptocompare.com/data/v2/histohour?fsym=" + currency + "&tsym=USD&limit=23&api_key={" + this.api_key + "}");
  }

  getSingeSymbolPrice(currency: string) {
    return this.http.get("https://min-api.cryptocompare.com/data/price?fsym=" + currency + "&tsyms=USD&api_key={" + this.api_key + "}");
  }

  getLatestNewsArticles() {
    return this.http.get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key={" + this.api_key + "}");
  }

  getDailyPairForYear(currency: string) {
    return this.http.get("https://min-api.cryptocompare.com/data/v2/histoday?fsym=" + currency + "&tsym=USD&limit=365&api_key={" + this.api_key + "}");
  }

  getDailyPairForHalfYear(currency: string) {
    return this.http.get("https://min-api.cryptocompare.com/data/v2/histoday?fsym=" + currency + "&tsym=USD&limit=183&api_key={" + this.api_key + "}");
  }
}
