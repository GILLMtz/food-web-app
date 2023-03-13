import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import {Subscription,Observable,of} from 'rxjs';
import { SearchService } from 'src/app/services/search.service';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public recipes!:Array<Recipe>;
  private subscription$:Array< Subscription>=[];
  public notFound:boolean=false;

  constructor(private recipeService:RecipeService,private searchService:SearchService) { }

  ngOnInit(): void {
    this.searchService.getData().subscribe(
      (request:any)=>{
        console.log("procensando query.....");
        console.log("query obtenida mediante el searchservice ",request);
        let {term, ...rest}=request;
        console.log("termino para realizar la busqueda ",term);
       if(term.length>0){
         this.subscription$.push(   
          this.recipeService.getRecipeByTerm(term).subscribe((response:any)=>{
          console.log("recipe obtains of servoce ",response);
          console.log('Recetas obtenidad al realizar busqueda especifica ',response);
          this.recipes=response;
        }))
       }else{
        this.notFound=true;
       }
      
    }
    );
  }

ngOnDestroy(): void {
  this.subscription$.forEach((sub:Subscription)=>sub.unsubscribe());
}
/* receiveData(event:any):void{
  console.log("busqueda recibida ",event);
  let term=event.term;
   console.log("reecibiendo datos ",term);
    this.recipeService.getRecipeByTerm(term).subscribe(
    (request:any)=>{
      this.recipes=request;
    }
   );
} */

}
