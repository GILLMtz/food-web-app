import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardOverlayDetailComponent } from './components/card-overlay-detail/card-overlay-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './components/banner/banner.component';
import { BadgeChangeDirective } from './directives/badge-change.directive';
import { RecepiDetailComponent } from './components/detail/recepi-detail/recepi-detail.component';
import { SearchMenuComponent } from './components/searchs/search-menu/search-menu.component';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './components/searchs/search-results/search-results.component';
import { AllResultsComponent } from './components/searchs/all-results/all-results.component';
import { RecipeModalComponent } from './components/detail/recipe-modal/recipe-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardOverlayDetailComponent,
    BannerComponent,
    BadgeChangeDirective,
    RecepiDetailComponent,
    SearchMenuComponent,
    SearchResultsComponent,
    AllResultsComponent,
    RecipeModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
