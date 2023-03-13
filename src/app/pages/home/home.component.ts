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
  constructor(private recipeService:RecipeService){}

  receiveData(event:any):void{
    console.log("busqueda recibida ",event);
    let term=event.term;
     console.log("reecibiendo datos ",term);
      this.recipeService.getRecipeByTerm(term).subscribe(
      (request:any)=>{
       /*  this.recipes=request; */
      }
     );
  }
}
