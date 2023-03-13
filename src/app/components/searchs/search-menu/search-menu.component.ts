import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { SearchMenu } from 'src/app/models/search-menu.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { SearchService } from 'src/app/services/search.service';
 

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
  constructor(private recipeService:RecipeService,private router:Router,private searchService:SearchService) { 
    console.log("topSearchResults ",this.topSearchResults$);

  }

  ngOnInit(): void {
    this.searchMenu={
      all:false,
      term:this.src,
      filters:[]
    }
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
      this.topSearchResults$=this.recipeService.getRecipeByTerm(term,5);
    }else{
      this.topSearchResults$=of([]);
    }
  }

  seeDetail(idRecipe:number){
    this.router.navigate(['inicio/recetas/',idRecipe ]);
  }
  move(event:any){
    console.log("keypress event ",event);
 
    switch (event.key) {
      case 'ArrowUp':
        
        break;
        case 'ArrowDown':
        
        break;
    case 'Enter':
      this.sendSearch();
    break;
      default:
        break;
    }
  }

  sendSearch(){
    console.log("sea derivado el evento Enter ");
   this.searchMenu.term= this.src;
    this.searchService.saveData(this.searchMenu).subscribe
    ();
    this.router.navigate(['inicio/resultados']);
  }

  showAllResults(){
    this.router.navigate(['/']);
  }
}
