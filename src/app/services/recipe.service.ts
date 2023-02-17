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


  getRecipeById(id:number):Observable<any>{
console.log("procesando getRecipeId ",(dataRaw as any).default);
    let recipe=((dataRaw as any).default).filter((r:any)=> r.id==id);
    console.log('Recipe obtenida',recipe);
    return of(recipe[0]);
  }
  getRecipes( ):Observable<any>{
        let recipe=((dataRaw as any).default);
        console.log('Recipe obtenidas',recipe);
        return of(recipe);
      }
  getTopRecipes(maxRecipes:number):Observable<any>{
    let recipesSum=0;
    let recipes=((dataRaw as any).default).filter((r:any,index:number,array:Array<any>)=>{
      if(recipesSum<=maxRecipes){
        recipesSum++;
        return r;
      }
    });
    console.log("recetas filtradas ",recipes);
    return of(recipes);
  }

}
