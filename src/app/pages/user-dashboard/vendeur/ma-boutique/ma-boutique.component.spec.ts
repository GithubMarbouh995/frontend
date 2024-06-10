import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaBoutiqueComponent } from './ma-boutique.component';

describe('MaBoutiqueComponent', () => {
  let component: MaBoutiqueComponent;
  let fixture: ComponentFixture<MaBoutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaBoutiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
