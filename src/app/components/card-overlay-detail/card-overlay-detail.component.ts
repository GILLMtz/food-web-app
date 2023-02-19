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

  maxLengthTitle=27;
  maxLengthDescription=254;
  ngOnInit(): void {   
  }
  seeDetail(){
    let idRecipe=this.cardConfig.id;
    this.router.navigate(['receta/',idRecipe ]);
 
  }

}
