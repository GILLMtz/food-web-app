import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { SearchMenu } from 'src/app/models/search-menu.model';
import { RecipeService } from 'src/app/services/recipe.service';
 

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.scss']
})
export class SearchMenuComponent implements OnInit {
  @Output() callbackData:EventEmitter<SearchMenu>=new EventEmitter();
  src:string='';

  topSearchResults$!:Observable<  Recipe[]| null | undefined>;
  //Array<Recipe>

  searchMenu!:SearchMenu;
  constructor(private recipeService:RecipeService) { 
    console.log("topSearchResults ",this.topSearchResults$);
    this.searchMenu={
      all:false,
      term:this.src,
      filters:[]
    }
  }

  ngOnInit(): void {
  }
/*   callSearch(term:any):void{
    this.searchMenu.term=term;
    if(term.length>=3){
      this.callbackData.emit(this.searchMenu)
    }
      
  } */

  callSearch(term:any):void{
    console.log("termino capturado");

    if(term.length>0){
      this.topSearchResults$=this.recipeService.getRecipeByTerm(term);
    }else{
      this.topSearchResults$=of([]);
    }
  }
}
