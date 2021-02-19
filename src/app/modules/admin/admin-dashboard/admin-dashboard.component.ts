import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/http/api.service';
import { NewsHomepageService } from '../../news/news-homepage/news-homepage.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})

export class AdminDashboardComponent implements OnInit{

  public data: any= [];
  ModalTitle: string;
  new: any;
  ActivateAddEditComp: boolean = false;

  NewsTitleFilter: string;
  NewsFilterList: any =[];
  
  

  constructor(private newsService: NewsHomepageService,
     private router: Router,
     private http: HttpClient,
     private service: ApiService,
    ){}

  ngOnInit(){
    console.log("homepage");
    this.refreshNewsList();
  }
 

  getDetails(id){
    this.router.navigate([`news/${id}`]);
  }

  

  refreshNewsList(){
    this.newsService.getData().subscribe((data) => {
      this.data = data;
      this.NewsFilterList = data;
    })
    
  }

  addNewClick(){
    this.new = {
      ID: 0,
      Title: "",
      NewsContent: ""
    }
    this.ModalTitle = "Adding News";
    this.ActivateAddEditComp = true;
  }

  editClick(item){
    this.new = item;
    this.ModalTitle = "Editing New";
    this.ActivateAddEditComp = true;
    
  }

  deleteClick(item){
    if(confirm("Are you sure you want to delete this new?")){
      this.service.deleteNew(item.ID).subscribe(data =>{
        alert(data.toString());
        this.refreshNewsList();
      });
    }
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

