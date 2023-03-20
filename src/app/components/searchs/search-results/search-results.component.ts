import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Subscription, Observable, of } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';
import { CardOverlay } from 'src/app/models/card-overlay.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  private searchTermName = 'q';
  public recipeCards!: Array<CardOverlay>;
  private subscription$: Array<Subscription> = [];
  private getResults$:Subscription=new Subscription();
  private getQueryParams$=new Subscription();

  constructor(private recipeService: RecipeService, private searchService: SearchService
    , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getQueryParams$= this.getParams();
    this.subscription$.push(this.getQueryParams$);
    this.subscription$.push(this.getResults$);
  }

getParams():Subscription{
  return this.activatedRoute.queryParams.subscribe((params: any) => {
     this.getResults$=(params.hasOwnProperty(this.searchTermName) && params[this.searchTermName] )? 
     this.getResults(params[this.searchTermName]):new Subscription();
  });
}

  getResults(term:string):Subscription{
     return  this.recipeService.getRecipeByTerm(term).subscribe((response: any) => {
          this.recipeCards = response.map((r: Recipe) => {
            return {recipe:r,horizontal: true}});
        });
  }


  ngOnDestroy(): void {
    this.subscription$.forEach((sub: Subscription) => sub.unsubscribe());
  }
  

}
