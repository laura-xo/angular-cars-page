import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  public id: any;

  constructor( private route:ActivatedRoute) { }

  ngOnInit(){
    //  this.id=this.activatedRoute.snapshot.paramMap.get("id");

    this.route.params.subscribe(params => {
      console.log('The id of this route is: ', params.id);
    });
    
  
  }

}
