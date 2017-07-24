import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './home/dashboard/dashboard.component'
import { FourofourComponent } from './shared/fourofour/fourofour.component'

import { AuthGuard } from './shared/auth-guard.service'

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'cars', loadChildren: 'app/cars/cars.module#CarsModule' },
  { 
    path: 'admin', 
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
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