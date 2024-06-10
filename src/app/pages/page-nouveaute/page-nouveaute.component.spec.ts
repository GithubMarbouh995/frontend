import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNouveauteComponent } from './page-nouveaute.component';

describe('PageNouveauteComponent', () => {
  let component: PageNouveauteComponent;
  let fixture: ComponentFixture<PageNouveauteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNouveauteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNouveauteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
