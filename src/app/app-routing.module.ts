import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './home/dashboard/dashboard.component'
import { FourofourComponent } from './shared/fourofour/fourofour.component'

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'cars', loadChildren: 'app/cars/cars.module#CarsModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: FourofourComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}