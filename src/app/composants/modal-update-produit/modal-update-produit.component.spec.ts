import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateProduitComponent } from './modal-update-produit.component';

describe('ModalUpdateProduitComponent', () => {
  let component: ModalUpdateProduitComponent;
  let fixture: ComponentFixture<ModalUpdateProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUpdateProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalUpdateProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
