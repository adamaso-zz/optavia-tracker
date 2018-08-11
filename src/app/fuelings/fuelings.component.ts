import { Component, OnInit } from '@angular/core';
import { FoodPullerService } from '../food-puller.service';


@Component({
  selector: 'app-fuelings',
  templateUrl: './fuelings.component.html',
  styleUrls: ['./fuelings.component.scss', '../app.component.scss']
})
export class FuelingsComponent implements OnInit {

  public foodData;
  public reorderList = JSON.parse(localStorage.getItem('reorder'));
  // public favoritesList = [];

  constructor(private foodPullerService: FoodPullerService) { }

  ngOnInit() {
    this.foodPullerService.pullFoods().subscribe(((data) => {
      this.foodData = data;
    }));
  }

  addToReorderList(item) {
    if (!this.reorderList.includes(item)) {
      this.reorderList.push(item);
    }
    localStorage.setItem("reorder", JSON.stringify(this.reorderList));
  }

  // addToFavoritesList(item) {
  //   if (!this.favoritesList.includes(item)) {
  //     this.favoritesList.push(item);
  //   }
  //   localStorage.setItem("favorites", JSON.stringify(this.favoritesList));
  // }

}
