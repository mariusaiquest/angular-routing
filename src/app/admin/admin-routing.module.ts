import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AdminDashboardComponent as AdminDashboard } from './admin-dashboard/admin-dashboard.component';
import { SecretComponent } from './secret-component/secret-component.component'

import { AuthGuard } from './../shared/auth-guard.service'

const adminRoutes: Routes = [
  { path: '', 
    canActivate: [AuthGuard],
    children: [
      {path: '', component: AdminDashboard},
      { 
        path: 'secret', 
        component: SecretComponent
      }
    ]
   }
  // {path: '', component: AdminDashboard, canActivate:[AuthGuard]},
  // {path: 'secret', component: SecretComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule{}