import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { AdminDashboardComponent as AdminDashboard } from './admin-dashboard/admin-dashboard.component'

const adminRoutes: Routes = [
  {path: 'admin', component: AdminDashboard}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(adminRoutes)
  ],
  declarations: [AdminDashboard],
  exports: [RouterModule]
})
export class AdminModule { }
