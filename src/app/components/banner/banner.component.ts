import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit ,OnDestroy{
  public topRecipes:Array<Recipe>=[];
  private topRecipes$!:Subscription;
  constructor(private recipeService:RecipeService,private router:Router) { }

  ngOnInit(): void {
    this.topRecipes$=this.recipeService.getTopRecipes(3).subscribe((res)=>{
      this.topRecipes=res;
      console.log("recetas recibidas  ",this.topRecipes);
    });
  }

  ngOnDestroy(): void {
    this.topRecipes$.unsubscribe();
  }
  goToDetail(id:number){
this.router.navigate(['receta',id]);
  }
}
