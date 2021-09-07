import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexYAxis,
} from "ng-apexcharts";
import { ActivatedRoute } from '@angular/router';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.page.html',
  styleUrls: ['./currency-detail.page.scss'],
})
export class CurrencyDetailPage implements OnInit {
  public chartOptions: Partial<ChartOptions>;
  volume: number;
  cryptos: any;
  depositMoney: number = 1000;
  depositToday: number = 0;
  currencyAbbr: string;

  constructor(private dataService: DataService, private route: ActivatedRoute) { 
    
  }
  
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.currencyAbbr = params.abbr;
      })
    this.dataService.getHourlyPair(this.currencyAbbr)
      .subscribe(result => {
        this.cryptos = result;
        let hourlyPair = this.cryptos.Data.Data
        this.chartOptions = {
          series: [
            {
              name: "candle",
              data: [
                {
                  x: new Date((hourlyPair[0].time + 7200)*1000),
                  y: [hourlyPair[0].open, hourlyPair[0].high, hourlyPair[0].low, hourlyPair[0].close]
                },
                {
                  x: new Date((hourlyPair[1].time + 7200)*1000),
                  y: [hourlyPair[1].open, hourlyPair[1].high, hourlyPair[1].low, hourlyPair[1].close]
                },
                {
                  x: new Date((hourlyPair[2].time + 7200)*1000),
                  y: [hourlyPair[2].open, hourlyPair[2].high, hourlyPair[2].low, hourlyPair[2].close]
                },
                {
                  x: new Date((hourlyPair[3].time + 7200)*1000),
                  y: [hourlyPair[3].open, hourlyPair[3].high, hourlyPair[3].low, hourlyPair[3].close]
                },
                {
                  x: new Date((hourlyPair[4].time + 7200)*1000),
                  y: [hourlyPair[4].open, hourlyPair[4].high, hourlyPair[4].low, hourlyPair[4].close]
                },
                {
                  x: new Date((hourlyPair[5].time + 7200)*1000),
                  y: [hourlyPair[5].open, hourlyPair[5].high, hourlyPair[5].low, hourlyPair[5].close]
                },
                {
                  x: new Date((hourlyPair[6].time + 7200)*1000),
                  y: [hourlyPair[6].open, hourlyPair[6].high, hourlyPair[6].low, hourlyPair[6].close]
                },
                {
                  x: new Date((hourlyPair[7].time + 7200)*1000),
                  y: [hourlyPair[7].open, hourlyPair[7].high, hourlyPair[7].low, hourlyPair[7].close]
                },
                {
                  x: new Date((hourlyPair[8].time + 7200)*1000),
                  y: [hourlyPair[8].open, hourlyPair[8].high, hourlyPair[8].low, hourlyPair[8].close]
                },
                {
                  x: new Date((hourlyPair[9].time + 7200)*1000),
                  y: [hourlyPair[9].open, hourlyPair[9].high, hourlyPair[9].low, hourlyPair[9].close]
                },
                {
                  x: new Date((hourlyPair[10].time + 7200)*1000),
                  y: [hourlyPair[10].open, hourlyPair[10].high, hourlyPair[10].low, hourlyPair[10].close]
                },
                {
                  x: new Date((hourlyPair[11].time + 7200)*1000),
                  y: [hourlyPair[11].open, hourlyPair[11].high, hourlyPair[11].low, hourlyPair[11].close]
                },
                {
                  x: new Date((hourlyPair[12].time + 7200)*1000),
                  y: [hourlyPair[12].open, hourlyPair[12].high, hourlyPair[12].low, hourlyPair[12].close]
                },
                {
                  x: new Date((hourlyPair[13].time + 7200)*1000),
                  y: [hourlyPair[13].open, hourlyPair[13].high, hourlyPair[13].low, hourlyPair[13].close]
                },
                {
                  x: new Date((hourlyPair[14].time + 7200)*1000),
                  y: [hourlyPair[14].open, hourlyPair[14].high, hourlyPair[14].low, hourlyPair[14].close]
                },
                {
                  x: new Date((hourlyPair[15].time + 7200)*1000),
                  y: [hourlyPair[15].open, hourlyPair[15].high, hourlyPair[15].low, hourlyPair[15].close]
                },
                {
                  x: new Date((hourlyPair[16].time + 7200)*1000),
                  y: [hourlyPair[16].open, hourlyPair[16].high, hourlyPair[16].low, hourlyPair[16].close]
                },
                {
                  x: new Date((hourlyPair[17].time + 7200)*1000),
                  y: [hourlyPair[17].open, hourlyPair[17].high, hourlyPair[17].low, hourlyPair[17].close]
                },
                {
                  x: new Date((hourlyPair[18].time + 7200)*1000),
                  y: [hourlyPair[18].open, hourlyPair[18].high, hourlyPair[18].low, hourlyPair[18].close]
                },
                {
                  x: new Date((hourlyPair[19].time + 7200)*1000),
                  y: [hourlyPair[19].open, hourlyPair[19].high, hourlyPair[19].low, hourlyPair[19].close]
                },
                {
                  x: new Date((hourlyPair[20].time + 7200)*1000),
                  y: [hourlyPair[20].open, hourlyPair[20].high, hourlyPair[20].low, hourlyPair[20].close]
                },
                {
                  x: new Date((hourlyPair[21].time + 7200)*1000),
                  y: [hourlyPair[21].open, hourlyPair[21].high, hourlyPair[21].low, hourlyPair[21].close]
                },
                {
                  x: new Date((hourlyPair[22].time + 7200)*1000),
                  y: [hourlyPair[22].open, hourlyPair[22].high, hourlyPair[22].low, hourlyPair[22].close]
                },
                {
                  x: new Date((hourlyPair[23].time + 7200)*1000),
                  y: [hourlyPair[23].open, hourlyPair[23].high, hourlyPair[23].low, hourlyPair[23].close]
                }
              ]
            }
          ],
          chart: {
            height: 350,
            type: "candlestick"
          },
          title: {
            text: "" + this.currencyAbbr + " chart",
            align: "left"
          },
          xaxis: {
            type: "datetime"
          },
          yaxis: {
            tooltip: {
              enabled: true
            }
          }
        };
      });

      this.chartOptions = {
      };

      this.dataService.getDailyPairForYear(this.currencyAbbr)
      .subscribe(result => {
        this.cryptos = result;
        let dailyPair = this.cryptos.Data.Data;
        
        let yearAgoValue = dailyPair[0];
        let currencyAmount = this.depositMoney / yearAgoValue.close;
        let todayValue = dailyPair[364];
        this.depositToday = todayValue.close * currencyAmount;
        this.depositToday = Math.round(this.depositToday * 1e4) / 1e4;
      });
  }

  radioGroupChange(event: any) {
    if (event.detail.value == 'halfYear') {
      this.dataService.getDailyPairForHalfYear(this.currencyAbbr)
      .subscribe(result => {
        this.cryptos = result;
        let dailyPair = this.cryptos.Data.Data;

        let halfYearAgoValue = dailyPair[0];
        let currencyAmount = this.depositMoney / halfYearAgoValue.close;
        let todayValue = dailyPair[182];
        this.depositToday = todayValue.close * currencyAmount;
        this.depositToday = Math.round(this.depositToday * 1e4) / 1e4;
      })
    } else if (event.detail.value == 'year') {
      this.dataService.getDailyPairForYear(this.currencyAbbr)
      .subscribe(result => {
        this.cryptos = result;
        let dailyPair = this.cryptos.Data.Data;
        
        let yearAgoValue = dailyPair[0];
        let currencyAmount = this.depositMoney / yearAgoValue.close;
        let todayValue = dailyPair[364];
        this.depositToday = todayValue.close * currencyAmount;
        this.depositToday = Math.round(this.depositToday * 1e4) / 1e4;
      });
    }
  }

}
