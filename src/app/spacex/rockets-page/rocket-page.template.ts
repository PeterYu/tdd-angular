import {RocketsPageComponent} from './rockets-page.component';
import {Rocket} from './models';
import {Observable} from 'rxjs';

export class RocketPageTemplate {
  constructor(private rocketPage: RocketsPageComponent) {}

  get rockets$(): Observable<Rocket[]>|undefined {
    return this.rocketPage.rockets$;
  }

}
