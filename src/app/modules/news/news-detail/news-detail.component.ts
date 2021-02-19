import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsHomepageService } from '../news-homepage/news-homepage.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html'
})

export class NewsDetailComponent implements AfterViewInit{

  allNews = [];
  currentNew;
  ID;

  constructor(private route: ActivatedRoute, private newsService: NewsHomepageService){
    this.route.params.subscribe(params => {
      
      this.ID = +params["id"];
       console.log(params["id"]);
   });
   this.newsService.getData().subscribe((data: any) =>{
    console.log(data)
    this.currentNew = data.find((item) => item["ID"] === this.ID);
    console.log(this.ID);
    console.log(this.currentNew);
   });
  }

  ngAfterViewInit(){
    
    
  }
}
