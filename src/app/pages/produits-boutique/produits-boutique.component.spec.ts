import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsBoutiqueComponent } from './produits-boutique.component';

describe('ProduitsBoutiqueComponent', () => {
  let component: ProduitsBoutiqueComponent;
  let fixture: ComponentFixture<ProduitsBoutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProduitsBoutiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProduitsBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
