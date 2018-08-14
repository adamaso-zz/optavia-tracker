import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FoodPullerService } from '../food-puller.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss', '../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DiaryComponent implements OnInit {

  constructor(private foodPullerService: FoodPullerService) { }
  public modal;
  public foodList;
  public fuelingNum = ['', '', '', '', ''];

  public myDiary;

  // When the user clicks on the button, open the modal 
  openModal() {
    this.modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  closeModal() {
    this.modal.style.display = "none";
  }

  ngOnInit() {
    this.modal = document.getElementById('myModal');

    this.foodPullerService.pullFoods().subscribe(((data) => {
      this.foodList = data;
    }));

    this.myDiary = JSON.parse(localStorage.getItem('diaryEntries')) || [];
  }

  addFueling(item, index) {
    const newEntries = {
      'food': item.item_name,
      'fuelingNum': index + 1
    };

    if (this.myDiary.length < index) {
      this.myDiary.push(newEntries);
    } else {
      this.myDiary[newEntries.fuelingNum] = newEntries;
    }

    localStorage.setItem('diaryEntries', JSON.stringify(this.myDiary));
  }

}
