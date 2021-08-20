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

  constructor(private dataService: DataService, private route: ActivatedRoute) { 
    
  }
  
  ngOnInit() {
    let currencyAbbr: string;
    this.route.queryParams
      .subscribe(params => {
        currencyAbbr = params.abbr;
      })
    this.dataService.getHourlyPair(currencyAbbr)
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
                }
              ]
            }
          ],
          chart: {
            height: 350,
            type: "candlestick"
          },
          title: {
            text: "" + currencyAbbr + " chart",
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
  }

}
