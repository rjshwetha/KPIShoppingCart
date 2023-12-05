import { TestBed } from '@angular/core/testing';

import { PdpopupService } from './pdpopup.service';

describe('PdpopupService', () => {
  let service: PdpopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdpopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
