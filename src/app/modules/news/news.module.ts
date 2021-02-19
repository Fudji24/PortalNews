import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsDetailService } from './news-detail/news-detail.service';
import { NewsHomepageComponent } from './news-homepage/news-homepage.component';
import { NewsHomepageService } from './news-homepage/news-homepage.service';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'news',
    component: NewsHomepageComponent,
    children: [
    ]
  },
  { path: 'news/:id', component: NewsDetailComponent }

];

@NgModule({
  declarations: [
    NewsDetailComponent,
    NewsHomepageComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    NewsDetailService,
    NewsHomepageService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class NewsModule {
}
