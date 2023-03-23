import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as dataRaw from '../../assets/data/recipes.mock.json';
import * as dataRaw_tags from '../../assets/data/recipesTags.mock.json';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private url = 'assets/data/recipes.mock.json';
  constructor(private httpClient: HttpClient) {
  }
  getRecipeByTerm(term: string, maxRecipes = -1): Observable<any> {
    let recipeCount = 0;
    /* console.log("procesando getRecipeId ",(dataRaw as any).default); */
    let recipe = ((dataRaw as any).default).filter((r: any) =>
      r.title.toLowerCase().includes(term.toLowerCase()) ||
      r.description.toLowerCase().includes(term.toLowerCase())).
      filter((recipe: any) => {
        if (maxRecipes < 0) {
          return recipe;
        }
        if (recipeCount < maxRecipes) {
          recipeCount++;
          return recipe;
        }
      });
    return of(recipe);
  }

  getRecipeById(id: number): Observable<any> {
    console.log("procesando getRecipeId ", (dataRaw as any).default);
    let recipe = ((dataRaw as any).default).filter((r: any) => r.id == id);
    console.log('Recipe obtenida', recipe);
    return of(recipe[0]);
  }
  getRecipes(filters: Array<string> = []): Observable<any> {
    let recipe = ((dataRaw as any).default);
    if (filters.length > 0) {
      recipe = recipe.filter((r: any) => this.containsValue(filters, r.tags));
    }
    return of(recipe);
  }

  private containsValue(values: Array<any>, arr: Array<any>): boolean {
    return values.some((value) => arr.some((element) => element === value));
  }


  getTopRecipes(maxRecipes: number): Observable<any> {
    let recipesSum = 0;
    let recipes = ((dataRaw as any).default).filter((r: any, index: number, array: Array<any>) => {
      if (recipesSum <= maxRecipes) {
        recipesSum++;
        return r;
      }
    });
    console.log("recetas filtradas ", recipes);
    return of(recipes);
  }

  getTags(): Observable<any> {
    let tags = ((dataRaw_tags as any).default);
    console.log('clasificacion de las recetas', tags);
    return of(tags);

  }
}
