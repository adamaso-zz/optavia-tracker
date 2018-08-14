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
  public diaryDisplay;
  public diarydate;
  public myDiary;

  public fds = [
    {
      fueling: ''
    },
    {
      fueling: ''
    },
    {
      fueling: ''
    },
    {
      fueling: ''
    },
    {
      fueling: ''
    },
  ];

  // When the user clicks on the button, open the modal 
  openModal() {
    this.modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  closeModal() {
    this.modal.style.display = "none";

    const newEntry = {
      'entries': this.fds,
      'date': this.diarydate
    }

    this.diaryDisplay.push(newEntry);

    console.log(this.diaryDisplay);

    localStorage.setItem('diaryEntries', JSON.stringify(this.diaryDisplay));
  }

  ngOnInit() {
    this.modal = document.getElementById('myModal');

    this.foodPullerService.pullFoods().subscribe(((data) => {
      this.foodList = data;
    }));

    this.diaryDisplay = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    console.log(this.diaryDisplay);

  }

  addFueling(item, index) {
    this.fds[index].fueling = item.item_name;
  }

  onDateChange(event) {
    this.diarydate = event;
  }


}
