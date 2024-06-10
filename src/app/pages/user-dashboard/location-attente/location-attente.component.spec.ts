import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAttenteComponent } from './location-attente.component';

describe('LocationAttenteComponent', () => {
  let component: LocationAttenteComponent;
  let fixture: ComponentFixture<LocationAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationAttenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
