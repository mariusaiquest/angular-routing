import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

import { HomeModule } from './home/home.module'
import { SharedModule } from './shared/shared.module'
import { DashboardComponent } from './home/dashboard/dashboard.component'
import { FourofourComponent } from './shared/fourofour/fourofour.component'

import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: '**', component: FourofourComponent},
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    SharedModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
