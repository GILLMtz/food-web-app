import { Component, OnInit,OnDestroy } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import {Subscription,Observable,of} from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  constructor(){}
   
/*   public recipes!:Array<Recipe>;
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
receiveData(event:string):void{
   console.log("reecibiendo datos");
    this.recipeService.getRecipeByTerm(event).subscribe(
    (request:any)=>{
      this.recipes=request;
    }
   );
} */

}
