import { Car } from './../Car';
import { CarService } from '../carservice'
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import {MatCard} from '@angular/material/card'
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent{


  public cars: Car[];
  public error: string;
  public notify: string
  public id: any;
  public displayedColumns = ['car_maker', 'car_model', 'year', 'vin', 'defects' ];
 
 
  @ViewChild(MatSort, {static:true}) sort:MatSort
  @ViewChild(MatPaginator, {static:true}) paginator:MatPaginator 

  constructor(private carService: CarService, private route: ActivatedRoute) {
    this.carService.getCarList().subscribe((cars)=> {
    console.log(cars);
    this.cars=cars

    },

    (error)=> {
      this.error =error.message;
      
    }
    )
   }
   
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.success === 'true') {
        this.notify = 'You have passed data';
      }
    });
  }

    
    
  
}