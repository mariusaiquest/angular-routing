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

  public theCar
  public loading:boolean = true;
  public errMsg: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: CarsService
  ) { }

  ngOnInit() {
    this.activatedRoute.data
      .subscribe((data: {car: Car}) => {
        this.loading = false;
        this.theCar = data.car;
      });
    // this.activatedRoute.paramMap
    //   .switchMap((params: ParamMap) => this.service.getCar(+params.get('id')))
    //   .map(data => data.json() as Car)
    //   .subscribe(theCar => {
    //     this.theCar = theCar
    //     this.loading = false;
    //   }, err => {
    //     console.log(err);
    //     this.errMsg = "Item not found";
    //     this.loading = false;
    //   })
  }

}
