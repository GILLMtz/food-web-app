import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import {Observable} from 'rxjs';
import * as dataRaw from '../../assets/data/recipes.mock.json';
 
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
private url='assets/data/recipes.mock.json';
  constructor(private httpClient:HttpClient) { 
  /*   ((dataRaw?.default) as any).filter((recipe:any)=>recipe.id==0
      ) */
      console.log(dataRaw);
  }

  getTopRecipes():Observable<any>{

     return of(dataRaw);
  }
  getRecipeById(id:number):Observable<any>{
console.log("procesando getRecipeId ",(dataRaw as any).default);
    let recipe=((dataRaw as any).default).filter((r:any)=> r.id==id);
    console.log('Recipe obtenida',recipe);
    return of(recipe[0]);
  }

}
