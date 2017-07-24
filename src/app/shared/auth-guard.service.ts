import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  canActivate():Observable<boolean> {
    return Observable.of(true);//.delay(2000);
  }

  canLoad(): Observable<boolean> {
    return Observable.of(true).delay(2000);
  }
}