import { TestBed } from '@angular/core/testing';

import { NgIdleDetectorService } from './ng-idle-detector.service';

describe('NgIdleDetectorService', () => {
  let service: NgIdleDetectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgIdleDetectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
