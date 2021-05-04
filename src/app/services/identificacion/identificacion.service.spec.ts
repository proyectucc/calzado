import { TestBed } from '@angular/core/testing';

import { IdentificacionService } from './identificacion.service';

describe('IdentificacionService', () => {
  let service: IdentificacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentificacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
