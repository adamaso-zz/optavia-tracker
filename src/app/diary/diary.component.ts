import { Component, OnInit } from '@angular/core';
import { FoodPullerService } from '../food-puller.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss', '../app.component.scss']
})
export class DiaryComponent implements OnInit {

  constructor(private foodPullerService: FoodPullerService) { }
  public modal;
  public foodList;
  
  // When the user clicks on the button, open the modal 
  openModal() {
    this.modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  closeModal() {
    this.modal.style.display = "none";
  }

  ngOnInit() {
    this.modal =  document.getElementById('myModal');

    this.foodPullerService.pullFoods().subscribe(((data) => {
      this.foodList = data;
      console.log(this.foodList.items);
    }));
  }

  formControlValue = '';
 
}
