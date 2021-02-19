import { AppLoginComponent } from './login/login.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NewsHomepageComponent } from '../news/news-homepage/news-homepage.component';
import { NewsDetailComponent } from '../news/news-detail/news-detail.component';
import { PublicGuard } from '../../services/guards/public.guard';

const routes: Routes = [
  {
    canActivate: [PublicGuard],
    path: 'login',
    component: AppLoginComponent,
    children: [
    ]
  },
];

@NgModule({
  declarations: [
    AppLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AuthModule {
}
