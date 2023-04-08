import { ViewportScroller } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import {filter} from 'rxjs/operators';
@Component({
  selector: 'app-recipe-modal',
  templateUrl: './recipe-modal.component.html',
  styleUrls: ['./recipe-modal.component.scss']
})
export class RecipeModalComponent implements OnInit {
@Input() recipe!:Recipe;
 /*  constructor(private router:Router) { } */
private moveScroll=false;
 constructor(private router: Router ,private scroller: ViewportScroller ) {
  this.router.events.subscribe(
    ()=>{
      if(this.moveScroll){
        
        let element=this.getResultsSectionElement();
        if(element) {element.scrollIntoView({ behavior: "smooth" })}
        this.moveScroll=false;
      }
    }
  );
    }

  ngOnInit(): void {
  }

  goToDetail(idRecipe:number){
   
    
  /*   this.router.navigate(['inicio/recetas/', idRecipe],{fragment:'resultsSection'}); */

/*   let [x,y]=this.getPostionDetail(); */

  /* this.scroller.scrollToPosition([x,y]); */
/*     let element=this.getResultsSectionElement()
   if(element) {element.scrollIntoView({ behavior: "smooth" })} */
   this.moveScroll=true;
  this.router.navigate(['inicio/recetas/', idRecipe]);
  }
  private getPostionDetail():number[]{
    let el=document.getElementById('resultsSection');
 
   let offsetLeft=(el?.offsetLeft)?el?.offsetLeft:0;
   let  offsetTop=(el?.offsetTop)?el?.offsetTop:0;
    return [offsetLeft,offsetTop ];
  }

  getResultsSectionElement(){
    return document.getElementById('resultsSection');
 
  }
}
