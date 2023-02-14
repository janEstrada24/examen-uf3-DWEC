import { TestBed } from '@angular/core/testing';

import { ArtistesAPIService } from './artistes-api.service';

describe('ArtistesAPIService', () => {
  let service: ArtistesAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistesAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
