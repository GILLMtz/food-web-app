import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOverlayDetailComponent } from './card-overlay-detail.component';

describe('CardOverlayDetailComponent', () => {
  let component: CardOverlayDetailComponent;
  let fixture: ComponentFixture<CardOverlayDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOverlayDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOverlayDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
