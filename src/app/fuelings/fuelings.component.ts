import { Component, OnInit } from '@angular/core';
import { FoodPullerService } from '../food-puller.service';


@Component({
  selector: 'app-fuelings',
  templateUrl: './fuelings.component.html',
  styleUrls: ['./fuelings.component.scss', '../app.component.scss']
})
export class FuelingsComponent implements OnInit {

  public foodData;

  constructor(private foodPullerService: FoodPullerService) { }

  ngOnInit() {
    this.foodPullerService.pullFoods().subscribe(((data) => {
      this.foodData = data;
    }));
  }

  showBar(event) {
    event.style.display = 'none';
  }

  hideBar(event) {
    event.style.display = 'block';

  }

}
