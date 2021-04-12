import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketsPageComponent } from './rockets-page/rockets-page.component';
import {SpacexStoreFacadeService} from './rockets-page/spacex-store-facade.service';
import {SpacexStoreFacade} from './rockets-page/spacex-store-facade';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    RocketsPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {provide: SpacexStoreFacade, useClass: SpacexStoreFacadeService}
  ]
})
export class SpacexModule { }
