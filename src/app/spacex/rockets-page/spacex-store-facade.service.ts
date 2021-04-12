import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Rocket} from './models';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {SpacexStoreFacade} from './spacex-store-facade';

@Injectable({
  providedIn: 'root'
})
export class SpacexStoreFacadeService implements SpacexStoreFacade {

  constructor(private httpClient: HttpClient) { }

  loadRockets(): Observable<Rocket[]> {
    return this.httpClient.get<{ id: string, 'rocket_name': string }[]>('https://api.spacexdata.com/v3/rockets').pipe(
      map(rockets => rockets.map(r => ({id: r.id, name: r.rocket_name})))
    );
  }
}
