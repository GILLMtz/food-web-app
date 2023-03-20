import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardOverlay } from 'src/app/models/card-overlay.model';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-all-results',
  templateUrl: './all-results.component.html',
  styleUrls: ['./all-results.component.scss']
})
export class AllResultsComponent implements OnInit {
  
  public recipeCards!:Array<CardOverlay>;
  private subscription$!:Subscription;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
 
   this.subscription$= this.recipeService.getRecipes().subscribe((response:any)=>{
      this.recipeCards= response.map((recipe:Recipe)=>{
        return {recipe:recipe}
      });
    });

  }
ngOnDestroy(): void {
  this.subscription$.unsubscribe();
}
}
