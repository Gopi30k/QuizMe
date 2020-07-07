import { TestBed } from '@angular/core/testing';

import { RouteResolverService } from './route-resolver.service';

describe('RouteResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteResolverService = TestBed.get(RouteResolverService);
    expect(service).toBeTruthy();
  });
});
