import { TestBed } from '@angular/core/testing';

import { marcaService } from './marca.service';

describe('marcaService', () => {
  let service: marcaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(marcaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
