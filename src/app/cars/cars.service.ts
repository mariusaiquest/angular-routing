import { Injectable } from '@angular/core'
import { HttpModule, Http } from '@angular/http'

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { APIUrl } from './../shared/config';

@Injectable()
export class CarsService {
  constructor(private http:Http) {}

  getCars() {
    return this.http.get(`${APIUrl}/cars`)
  }

  getCar(id: number): Observable<any> {
    return this.http.get(`${APIUrl}/cars/${id}`);
  }
}