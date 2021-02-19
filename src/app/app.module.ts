import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsModule } from './modules/news/news.module';
import { HeaderComponent } from './components/header/header.component';
import { AdminModule } from './modules/admin/admin.module';
import { CommonModule } from '@angular/common';
import { AuthModule } from './modules/auth/auth.module';
import { ApiService } from './services/http/api.service';
import { AuthService } from './services/http/auth.service';
import { routing } from './app.routing';
import { AuthGuard } from './services/guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { PublicGuard } from './services/guards/public.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NewsModule,
    AdminModule,
    AuthModule,
    HttpClientModule,
    routing
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard,
    PublicGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
