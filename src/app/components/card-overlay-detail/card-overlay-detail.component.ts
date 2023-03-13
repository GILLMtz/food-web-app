import { Component,  Input, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { CardOverlay } from 'src/app/models/card-overlay.model';

@Component({
  selector: 'app-card-overlay-detail',
  templateUrl: './card-overlay-detail.component.html',
  styleUrls: ['./card-overlay-detail.component.scss']
})
export class CardOverlayDetailComponent implements OnInit {
 

 @Input() cardConfig!:CardOverlay;
  constructor(private router:Router) { }

  public maxLengthTitle=33;
  public maxLengthDescription=100;
  public maxTags=4;
  ngOnInit(): void {
    this.filterTags();
  }

  filterTags(){
    let numTags=0;
    this.cardConfig.tags=this.cardConfig.tags?.filter((tag:any)=>{
      if(numTags<this.maxTags){
        numTags++;
        return tag;
      }
    }); 
  }

  seeDetail(){
    let idRecipe=this.cardConfig.id;
    this.router.navigate(['inicio/recetas/',idRecipe ]);
  }

}
