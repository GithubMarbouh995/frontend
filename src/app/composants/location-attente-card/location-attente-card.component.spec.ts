import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAttenteCardComponent } from './location-attente-card.component';

describe('LocationAttenteCardComponent', () => {
  let component: LocationAttenteCardComponent;
  let fixture: ComponentFixture<LocationAttenteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationAttenteCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationAttenteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
