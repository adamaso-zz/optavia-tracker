import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.component.html',
  styleUrls: ['./reorder.component.scss', '../app.component.scss']
})
export class ReorderComponent implements OnInit {

  public myReorderList = [];

  constructor() { }

  ngOnInit() {
    this.myReorderList = JSON.parse(localStorage.getItem('reorder'));
  }

  removeFromList(index) {
    this.myReorderList.splice(index, 1);

    localStorage.setItem('reorder', JSON.stringify(this.myReorderList));
  }

}
