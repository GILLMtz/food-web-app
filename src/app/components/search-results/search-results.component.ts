import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import {Subscription,Observable,of} from 'rxjs';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public recipes!:Array<Recipe>;
  private subscription$!:Subscription;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
   this.subscription$= this.recipeService.getRecipes().subscribe((response:any)=>{
      console.log("recipe obtains of servoce ",response);
      this.recipes=response;
    });
  }
ngOnDestroy(): void {
  this.subscription$.unsubscribe();
}
receiveData(event:any):void{
  console.log("busqueda recibida ",event);
  let term=event.term;
   console.log("reecibiendo datos ",term);
    this.recipeService.getRecipeByTerm(term).subscribe(
    (request:any)=>{
      this.recipes=request;
    }
   );
}

}
