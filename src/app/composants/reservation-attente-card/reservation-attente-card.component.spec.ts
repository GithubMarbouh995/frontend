import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationAttenteCardComponent } from './reservation-attente-card.component';

describe('ReservationAttenteCardComponent', () => {
  let component: ReservationAttenteCardComponent;
  let fixture: ComponentFixture<ReservationAttenteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationAttenteCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationAttenteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
