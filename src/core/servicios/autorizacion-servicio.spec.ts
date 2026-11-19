import { TestBed } from '@angular/core/testing';

import { AutorizacionServicio } from './autorizacion-servicio';

describe('AutorizacionServicio', () => {
  let service: AutorizacionServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutorizacionServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
