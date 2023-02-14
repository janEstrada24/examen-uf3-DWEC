import { TestBed } from '@angular/core/testing';

import { QuadresAPIService } from './quadres-api.service';

describe('QuadresAPIService', () => {
  let service: QuadresAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuadresAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
