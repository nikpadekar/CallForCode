import { TestBed } from '@angular/core/testing';

import { HelpinghandService } from './helpinghand.service';

describe('HelpinghandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelpinghandService = TestBed.get(HelpinghandService);
    expect(service).toBeTruthy();
  });
});
