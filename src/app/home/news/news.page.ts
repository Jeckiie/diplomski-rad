import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DataService } from 'src/app/services/data.service';

declare let cordova: any;

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  private news: any;
  private loadedNews: any[];
  private weekday: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  private month: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct", "Nov", "Dec"]

  constructor(private dataService: DataService) {
    
   }

  ngOnInit() {
    this.loadedNews = [];
    this.dataService.getLatestNewsArticles()
      .subscribe(result => {
        this.news = result;
        for(let x = 0; x < 20; x++) {
          this.loadedNews.push(this.news.Data[x]);
        }
      })
  }

  timestampToDate(timestamp: number) {
    const date = new Date((timestamp + 7200)*1000);
    return this.weekday[date.getDay()] + ", "
    + " " + date.getDate() + " " + this.month[date.getMonth()];
  }

  goToLink(url: string) {
    var ref = InAppBrowser.create(url);
  }

}
