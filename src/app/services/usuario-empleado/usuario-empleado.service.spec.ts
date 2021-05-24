import { TestBed } from '@angular/core/testing';

import { UsuarioEmpleadoService } from './usuario-empleado.service';

describe('UsuarioEmpleadoService', () => {
  let service: UsuarioEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
