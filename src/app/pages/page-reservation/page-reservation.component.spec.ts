import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReservationComponent } from './page-reservation.component';

describe('PageReservationComponent', () => {
  let component: PageReservationComponent;
  let fixture: ComponentFixture<PageReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
