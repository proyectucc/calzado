import { TestBed } from '@angular/core/testing';

import { categoriaService } from './categoria.service';

describe('categoriaService', () => {
  let service: categoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(categoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
