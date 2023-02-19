import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardOverlayDetailComponent } from './components/card-overlay-detail/card-overlay-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './components/banner/banner.component';
import { BadgeChangeDirective } from './directives/badge-change.directive';
import { RecepiDetailComponent } from './pages/recepi-detail/recepi-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardOverlayDetailComponent,
    BannerComponent,
    BadgeChangeDirective,
    RecepiDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
