import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Rocket} from './models';
import {SpacexStoreFacade} from './spacex-store-facade';

@Component({
  selector: 'app-rockets-page',
  templateUrl: './rockets-page.component.html',
  styleUrls: ['./rockets-page.component.scss'],
})
export class RocketsPageComponent implements OnInit {

  rockets$: Observable<Rocket[]>|undefined;

  constructor(private spacexStoreFacadeService: SpacexStoreFacade) { }

  ngOnInit(): void {
    this.rockets$ = this.spacexStoreFacadeService.loadRockets();
  }

}
