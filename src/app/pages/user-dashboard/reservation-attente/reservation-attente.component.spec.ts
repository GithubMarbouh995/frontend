import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationAttenteComponent } from './reservation-attente.component';

describe('ReservationAttenteComponent', () => {
  let component: ReservationAttenteComponent;
  let fixture: ComponentFixture<ReservationAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationAttenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
