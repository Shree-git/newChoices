import { TestBed } from '@angular/core/testing';

import { ImpulseService } from './impulse.service';

describe('ImpulseService', () => {
  let service: ImpulseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpulseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
