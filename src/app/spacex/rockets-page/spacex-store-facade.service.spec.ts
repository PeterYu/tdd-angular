import { TestBed } from '@angular/core/testing';

import { SpacexStoreFacadeService } from './spacex-store-facade.service';
import {HttpClient, HttpClientModule, HttpXhrBackend} from '@angular/common/http';

describe('SpacexStoreFacadeService', () => {
  it('should be created', () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    const service = TestBed.inject(SpacexStoreFacadeService);
    expect(service).toBeTruthy();
  });

  it('load SpaceX rockets', (done) => {
    const httpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));

    const spacexStoreFacadeService = new SpacexStoreFacadeService(httpClient);

    const rockets = spacexStoreFacadeService.loadRockets();

    rockets.subscribe(rs => {
      expect(rs.length).toBeGreaterThan(0);
      done();
    });
  });
});
