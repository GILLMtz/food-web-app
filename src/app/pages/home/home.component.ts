import { Component, OnInit,OnDestroy } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import {Subscription} from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  public recipes!:Array<Recipe>;
  private subscription$!:Subscription;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
   this.subscription$= this.recipeService.getTopRecipes().subscribe((response:any)=>{
      console.log("recipe obtains of servoce ",response);
      this.recipes=response.default as any;
    /*   console.log("parseo a json: ",JSON.parse(response));
      this.recipes=JSON.parse(response) ; */
      /* this.recipes=response;*/
      this.recipes.forEach(recipe=>console.log(recipe.id)); 
    });
  }
ngOnDestroy(): void {
  this.subscription$.unsubscribe();
}

}
