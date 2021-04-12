import {RocketsPageComponent} from './rockets-page.component';
import {render, screen} from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import {of} from 'rxjs';
import {RocketPageTemplate} from './rocket-page.template';
import {cold} from 'jasmine-marbles';
import {SpacexStoreFacadeService} from './spacex-store-facade.service';
import {createMock} from '@testing-library/angular/jest-utils';
import {HttpClient} from '@angular/common/http';
import {SpacexStoreFacade} from './spacex-store-facade';

describe('RocketsPageComponent', () => {
  it('should render', async () => {

    const spacexStoreFacadeService = createMock(SpacexStoreFacadeService);
    spacexStoreFacadeService.loadRockets = jest.fn(() => of([{id: '230498234', name: 'Falcon 9'}]));

    await render(RocketsPageComponent, {
      componentProviders: [
        {provide: SpacexStoreFacade, useValue: spacexStoreFacadeService}
      ],
    });

    expect(screen.getByRole('heading', {name: /SpaceX Rockets Details/i})).toBeTruthy();

    const rocketCombo = screen.getByRole('combobox', {name: /Rocket/i});
    expect(rocketCombo).toBeTruthy();

    userEvent.selectOptions(rocketCombo, 'Falcon 9');
  });

  it('Rocket Page / Template Collaboration', () => {
    const httpClient = createMock(HttpClient);
    const rocketsPageComponent = new RocketsPageComponent(new SpacexStoreFacadeService(httpClient));
    const rockets = [{id: '32e9jasdf', name: 'Falcon Heavy'}];
    rocketsPageComponent.rockets$ = cold('a', {a: rockets});

    const rocketPageTemplate = new RocketPageTemplate(rocketsPageComponent);

    expect(rocketPageTemplate.rockets$).toBeObservable(cold('a', {a: rockets}));
  });

  it('Fetches rockets onInit()', () => {
    const rockets = [{id: '2394j0ase', name: 'Falcon'}];

    const spacexStoreFacadeService: SpacexStoreFacade = {
      loadRockets: jest.fn(() => cold('a', {a: rockets}))
    };

    const component = new RocketsPageComponent(spacexStoreFacadeService);
    component.ngOnInit();

    expect(spacexStoreFacadeService.loadRockets as jest.Mock).toHaveBeenCalled();
    expect(component.rockets$).toBeObservable(cold('a', {a: rockets}));
  });
});
