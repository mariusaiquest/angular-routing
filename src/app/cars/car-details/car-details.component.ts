import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Car } from './../car'
import { CarsService } from './../cars.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  public theCar: Car

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: CarsService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap
      .switchMap((params: ParamMap) => this.service.getCar(+params.get('id')))
      .map(data => data.json() as Car)
      .subscribe(theCar => this.theCar = theCar)
  }

}
