import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HotnewsComponent } from './home/hotnews/hotnews.component';
import { TrendingComponent } from './home/trending/trending.component';
import { NewsComponent } from './home/news/news.component';
import { LatestComponent } from './home/latest/latest.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    HotnewsComponent,
    TrendingComponent,
    NewsComponent,
    LatestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
