import { Injectable } from '@angular/core';

import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { Car } from './car';
import { CarsService } from './cars.service';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/toPromise';

@Injectable() 
export class CarDetailsResolver implements Resolve<Car>{

  constructor(
    private service: CarsService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Car> {
    let carId = route.paramMap.get("id");
    return this.service.getCar(+carId)
      .map(data => data.json() as Car)
      .toPromise().then(theCar => {
        if(theCar) {
          return theCar;
        } else {
          this.router.navigate(['/cars']);
          return null;
        }
      }, err => {
        console.info("The error: ", err);
        // alert("Some backend error, nav back");
        this.router.navigate(['/cars']);
        return null;
      });
  }
}