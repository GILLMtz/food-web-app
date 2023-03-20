import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('searchBar') searchBar!: ElementRef;
  @Output() callbackData: EventEmitter<SearchMenu> = new EventEmitter();
  src: string = '';

  topSearchResults$!: Observable<Recipe[]>;
  searchMenu!: SearchMenu;
  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.searchMenu = {
      all: false,
      term: this.src,
      filters: []
    }
  }

  callSearch(term: any): void {
    if (term.length > 0) {
      this.topSearchResults$ = this.recipeService.getRecipeByTerm(term, 5);
    } else {
      this.topSearchResults$ = of([]);
    }
  }

  seeDetail(idRecipe: number) {
    this.router.navigate(['inicio/recetas/', idRecipe]);
  }
  move(event: any) {
    console.log("keypress event ", event);
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

  sendSearch() {
    this.searchMenu.term = this.src;
    this.searchBar.nativeElement.blur();
    if (this.src.length > 0) {
      this.router.navigate(
        ['inicio/resultados'],
        { queryParams: { q: this.src } }
      );
    }
  }

  showAllResults() {
    this.router.navigate(['/']);
  }
}
