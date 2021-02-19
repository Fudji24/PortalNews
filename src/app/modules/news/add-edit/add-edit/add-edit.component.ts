import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/http/api.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
 
})
export class AddEditComponent implements OnInit {

  constructor(private service: ApiService, private router: Router,) { }


  @Input() new: any
    ID: string;
    Title: string;
    Content: string;
    
 
  ngOnInit(): void {

    this.ID = this.new.ID,
        this.Title = this.new.Title,
        this.Content = this.new.Content;
  }

  
  
  addNew(){
    var val = {
        ID:this.ID,
        Title:this.Title,
        NewsContent: this.Content
    };
    window.location.reload();
    this.service.addNew(val).subscribe(res =>{
        alert(res.toString());
    });
    
}

editNew(){
    var val = {
        ID:this.ID,
        Title:this.Title,
        NewsContent: this.Content
    };
    window.location.reload();
      this.service.editNew(val).subscribe(res =>{
        alert(res.toString());
        
    });
      
}




}
