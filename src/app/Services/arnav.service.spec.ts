import { TestBed } from '@angular/core/testing';

import { ArnavService } from './arnav.service';

describe('ArnavService', () => {
  let service: ArnavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArnavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
