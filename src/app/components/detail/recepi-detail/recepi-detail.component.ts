import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { RecipeService } from 'src/app/services/recipe.service';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
@Component({
  selector: 'app-recepi-detail',
  templateUrl: './recepi-detail.component.html',
  styleUrls: ['./recepi-detail.component.scss']
})
export class RecepiDetailComponent implements OnInit, OnDestroy {
  private IdRecipe!: number;
  private subscribes$: Array<Subscription> = [];
  public recipe!: Recipe;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService,
    private location: Location) { }

  ngOnInit() {
    let params$ = this.getIdOfUrl();
    this.subscribes$.push(params$);
  }
  getIdOfUrl(): Subscription {
    return this.route.params.
      subscribe((params: Params) => 
      {this.IdRecipe = parseInt(params['id']);
        console.log("change params ");
        this.subscribes$.push(this.getRecipe());
      });
  }
  getRecipe(): Subscription {
    return this.recipeService.getRecipeById(this.IdRecipe).
      subscribe((response: any) => this.recipe = response);
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscribes$.forEach((element$: Subscription) => element$.unsubscribe());
  }

}
