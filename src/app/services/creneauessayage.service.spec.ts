import { TestBed } from '@angular/core/testing';

import { CreneauEssayageService } from './creneauessayage.service';

describe('CreneauessayageService', () => {
  let service: CreneauEssayageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreneauEssayageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
