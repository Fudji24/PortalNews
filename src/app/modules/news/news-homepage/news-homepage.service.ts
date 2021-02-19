import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/http/api.service';

@Injectable()
export class NewsHomepageService {

    constructor(private service: ApiService){}

    getData(){
        return this.service.getHttp('News', {});

        
    }

}
