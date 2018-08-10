import { Component, OnInit } from '@angular/core';
import { FoodPullerService } from '../food-puller.service';

@Component({
  selector: 'optavia-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {

  constructor(private foodPullerService: FoodPullerService) { }

  ngOnInit() {
    this.foodPullerService.pullFoods().subscribe(((data)=> {
      console.log(data);
    }))
  }

}
