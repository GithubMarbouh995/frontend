import { TestBed } from '@angular/core/testing';

import { CreneauDisponibiliteService } from './creneaudiaponibilite.service';

describe('CreneaudiaponibiliteService', () => {
  let service: CreneauDisponibiliteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreneauDisponibiliteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
