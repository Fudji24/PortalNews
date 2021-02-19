import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NewsHomepageService } from './news-homepage.service';

@Component({
  selector: 'app-news-homepage',
  templateUrl: './news-homepage.component.html',
  styleUrls: ['./news-homepage.component.css']
})

export class NewsHomepageComponent implements OnInit{

  public data: any = [];
  constructor(private newsService: NewsHomepageService,
     private router: Router
    ){}

  ngOnInit(){
    console.log("homepage");
    this.newsService.getData().subscribe((data) => {
      this.data = data as any;
      this.refreshNewsList();
    })
  }

  getDetails(id){
    this.router.navigate([`news/${id}`]);
  }

  NewsTitleFilter: string;
  NewsFilterList: any =[];

  refreshNewsList(){
    this.newsService.getData().subscribe((data) => {
      this.data  = data as any;
      this.NewsFilterList = data;
    })
    
  }

  Filtering(){
    var NewsTitleFilter = this.NewsTitleFilter;

    this.data = this.NewsFilterList.filter(function(el){
      return el.Title.toString().toLowerCase().includes(
        NewsTitleFilter.toString().trim().toLowerCase()
      )
    });
  }
}
