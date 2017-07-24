import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';

import { CarsListComponent } from './list/list.component';
import { CarsService } from './cars.service';
import { CarDetailsComponent } from './car-details/car-details.component';

@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule
  ],
  declarations: [CarsListComponent, CarDetailsComponent],
  providers: [CarsService]
})
export class CarsModule { }
