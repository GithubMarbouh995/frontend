import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiqueDetailPageComponent } from './boutique-detail-page.component';

describe('BoutiqueDetailPageComponent', () => {
  let component: BoutiqueDetailPageComponent;
  let fixture: ComponentFixture<BoutiqueDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoutiqueDetailPageComponent]
    });
    fixture = TestBed.createComponent(BoutiqueDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
