import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOverlayDetailHorizontalComponent } from './card-overlay-detail-horizontal.component';

describe('CardOverlayDetailHorizontalComponent', () => {
  let component: CardOverlayDetailHorizontalComponent;
  let fixture: ComponentFixture<CardOverlayDetailHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOverlayDetailHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOverlayDetailHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
