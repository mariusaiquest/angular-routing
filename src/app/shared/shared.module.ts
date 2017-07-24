import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router'
import { NavbarComponent } from './navbar/navbar.component';
import { FourofourComponent } from './fourofour/fourofour.component';
import { AuthGuard } from './auth-guard.service'

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavbarComponent, FourofourComponent],
  exports: [NavbarComponent, FourofourComponent],
  providers: [AuthGuard]
})
export class SharedModule { }
