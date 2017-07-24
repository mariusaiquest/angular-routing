import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CarsListComponent } from './list/list.component'
import { CarDetailsComponent } from './car-details/car-details.component'

const carsRoutes: Routes = [
  {path: "", component: CarsListComponent},
  {path: ":id", component: CarDetailsComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(carsRoutes)
  ],

  exports: [RouterModule]
})
export class CarsRoutingModule {

}