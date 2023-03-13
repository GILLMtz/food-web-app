import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-all-results',
  templateUrl: './all-results.component.html',
  styleUrls: ['./all-results.component.scss']
})
export class AllResultsComponent implements OnInit {
  
  public recipes!:Array<Recipe>;
  private subscription$!:Subscription;
  constructor(private recipeService:RecipeService,private searchService:SearchService) { }

  ngOnInit(): void {
    this.searchService.getData().subscribe
    (
      (request:any)=>{
        console.log("procensando query.....");
        console.log("query obtenida mediante el searchservice ",request)
      }
    );
   this.subscription$= this.recipeService.getRecipes().subscribe((response:any)=>{
      console.log("recipe obtains of servoce ",response);
      this.recipes=response;
    });

  }
ngOnDestroy(): void {
  this.subscription$.unsubscribe();
}
}
