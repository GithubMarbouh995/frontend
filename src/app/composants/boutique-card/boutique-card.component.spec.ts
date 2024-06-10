import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiqueCardComponent } from './boutique-card.component';

describe('BoutiqueCardComponent', () => {
  let component: BoutiqueCardComponent;
  let fixture: ComponentFixture<BoutiqueCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoutiqueCardComponent]
    });
    fixture = TestBed.createComponent(BoutiqueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
