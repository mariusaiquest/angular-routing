import { Component, OnInit } from '@angular/core';

import { CarsService } from './../cars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class CarsListComponent implements OnInit {

  public cars: Array<any> = [];

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.carsService.getCars()
      .map(data => data.json())
      .subscribe(data => this.cars = data)
  }
}
