import {Observable} from 'rxjs';
import {Rocket} from './models';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export abstract class SpacexStoreFacade {
    abstract loadRockets(): Observable<Rocket[]>;
}
