import { Component, OnInit,   ViewChild, ElementRef, AfterViewInit,  OnDestroy, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, of, pipe, Subscription } from 'rxjs';
import { filter, map, startWith, tap } from 'rxjs/operators';
import { Recipe } from 'src/app/models/recipe.model';
import { SearchMenu } from 'src/app/models/search-menu.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.scss']
})
export class SearchMenuComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('searchBar') searchBar!: ElementRef;
  @ViewChild('filterSection') filterSection!: ElementRef;
  src: string = '';

  searchMenu: SearchMenu = { term: '' };
  private allResultsPageRoutes = ['/', '/inicio'];

  topSearchResults$!: Observable<Recipe[]>;
  public recipeTags$!: Observable<string[]>;
  private routerUrl$!: Subscription;
  private subscription$: Array<Subscription> = [];
  private maxTopSearchResults:number=5;
  
 

  public showTags: boolean = true;
  constructor(private recipeService: RecipeService, private router: Router, private searchService: SearchService
    ,private renderer:Renderer2) { }

  ngOnInit(): void {
    this.getRecipeTags();
  }
  getRecipeTags() { this.recipeTags$ = this.recipeService.getTags(); }

  ngAfterViewInit(): void {
    this.routerUrl$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      startWith(this.router),
      map((navigationEnd) => ((navigationEnd as NavigationEnd).url))).subscribe((event) => {
      this.currentAllResultsPage(event)?this.showAllResults(true):this.showAllResults(false); 
      }); 
    this.subscription$.push(this.routerUrl$);
  }

  currentAllResultsPage(event: string): boolean {
    return event === this.allResultsPageRoutes[0] || event === this.allResultsPageRoutes[1];
  }

  showAllResults(state: boolean) {
    this.renderer.setProperty(this.filterSection.nativeElement.childNodes[0].firstChild.firstChild,'checked',state);
  }
  callSearch(term: any): void {
    this.topSearchResults$ = (term.length > 0) ? this.recipeService.getRecipeByTerm(term, this.maxTopSearchResults) : this.topSearchResults$ = of([]);
  }

  sendParticularSearch(idRecipe: number) {
    this.searchBar.nativeElement.blur();
    this.router.navigate(['inicio/recetas/', idRecipe]);
  }
  move(event: any) {
    if (event.key === 'Enter') {
      this.sendSearchByTerm();
    }
  }

  sendSearchByTerm() {
    this.searchBar.nativeElement.blur();
    if (this.src.length > 0) {
      this.showAllResults(false);
      this.router.navigate(
        ['inicio/resultados'],
        { queryParams: { q: this.src } }
      );
    }
  }

  sendSearchForAllResults() {
    this.showTags = !this.showTags;
    this.showAllResults(true);
    this.router.navigate(['/']);
  }


  changeFilters(event: any) {
    this.searchMenu.filters = this.getFilters();
    this.subscription$.push(this.searchService.saveData(this.searchMenu).subscribe());
  }

  private getFilters(): Array<any> {
    console.log(this.filterSection.nativeElement.lastChild.childNodes);
    return [... this.filterSection.nativeElement.lastChild.childNodes]
      .filter((li: any) => (li.firstChild && li.firstChild.checked))
      .map(eli => eli.lastChild.innerText);
  }
  ngOnDestroy(): void {
    this.subscription$.forEach((s: Subscription) => s.unsubscribe());
  }
}
