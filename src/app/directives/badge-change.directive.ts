import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBadgeChange]'
})
export class BadgeChangeDirective implements OnInit{
  @Input() appBadgeChange=0;
private badges=[
 
  "text-bg-primary",
  "text-bg-success",
  "text-bg-danger", 
  "text-bg-warning", 
  "text-bg-info" 
];

  constructor(private renderer:Renderer2,private el:ElementRef) { }

  ngOnInit(): void {
    this.setBadge();
  }

  setBadge(){
    let index=this.appBadgeChange;
    this.renderer.addClass(this.el.nativeElement,'badge');
    let badgeSelected=
    (index>-1 && index<this.badges.length)? this.badges[index]:this.badges[0];
    
    this.renderer.addClass(this.el.nativeElement,badgeSelected);
  }

}
