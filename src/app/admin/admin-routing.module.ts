import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AdminDashboardComponent as AdminDashboard } from './admin-dashboard/admin-dashboard.component';
import { SecretComponent } from './secret-component/secret-component.component'

const adminRoutes: Routes = [
  { path: 'admin',
    children: [
      {path: '', component: AdminDashboard},
      {path: 'secret', component: SecretComponent}
    ]
   }
];

@NgModule({
  imports: [
    RouterModule.forRoot(adminRoutes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule{}