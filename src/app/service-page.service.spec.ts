import { TestBed } from '@angular/core/testing';

import { ServicePageService } from './service-page.service';

describe('ServicePageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicePageService = TestBed.get(ServicePageService);
    expect(service).toBeTruthy();
  });
});
