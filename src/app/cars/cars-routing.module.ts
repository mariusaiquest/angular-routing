import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CarsListComponent } from './list/list.component'
import { CarDetailsComponent } from './car-details/car-details.component'
import { CarDetailsResolver } from './car-details.resolver';

const carsRoutes: Routes = [
  {path: "", component: CarsListComponent},
  {
    path: ":id", 
    component: CarDetailsComponent,
    resolve: {
      car: CarDetailsResolver
    }
},
];

@NgModule({
  imports: [
    RouterModule.forChild(carsRoutes)
  ],
  exports: [RouterModule],
  providers: [CarDetailsResolver]
})
export class CarsRoutingModule {

}