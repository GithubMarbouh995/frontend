import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateProduitComponent } from './modal-create-produit.component';

describe('ModalCreateProduitComponent', () => {
  let component: ModalCreateProduitComponent;
  let fixture: ComponentFixture<ModalCreateProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCreateProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
