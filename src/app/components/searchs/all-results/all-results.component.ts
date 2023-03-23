import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardOverlay } from 'src/app/models/card-overlay.model';
import { Recipe } from 'src/app/models/recipe.model';
import { SearchMenu } from 'src/app/models/search-menu.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-all-results',
  templateUrl: './all-results.component.html',
  styleUrls: ['./all-results.component.scss']
})
export class AllResultsComponent implements OnInit {

  public recipeCards!: Array<CardOverlay>;
  private subscription$!: Subscription;
  private searchService$!:Subscription;
  constructor(private recipeService: RecipeService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService$= this.searchService.getData().subscribe((search: SearchMenu) => {
      let filters=(search.filters != undefined)?search.filters:[];
        this.subscription$ = this.recipeService.getRecipes(filters).subscribe((response: any) => {
          this.recipeCards = response.map((r: Recipe) => {return { recipe: r }} );
        });
      
    });


  }
  ngOnDestroy(): void {
    this.searchService$.unsubscribe();
    this.subscription$.unsubscribe();
  }
}
