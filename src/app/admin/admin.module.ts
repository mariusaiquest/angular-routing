import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent as AdminDashboard } from './admin-dashboard/admin-dashboard.component';
import { SecretComponent } from './secret-component/secret-component.component'


@NgModule({
  imports: [
    AdminRoutingModule
  ],
  declarations: [AdminDashboard, SecretComponent]
})
export class AdminModule { }
