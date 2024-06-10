import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevenirVendeurComponent } from './devenir-vendeur.component';

describe('DevenirVendeurComponent', () => {
  let component: DevenirVendeurComponent;
  let fixture: ComponentFixture<DevenirVendeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevenirVendeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevenirVendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
