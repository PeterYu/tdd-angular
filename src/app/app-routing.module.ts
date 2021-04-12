import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RocketsPageComponent} from './spacex/rockets-page/rockets-page.component';

const routes: Routes = [
  {
    path: 'rockets',
    component: RocketsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
