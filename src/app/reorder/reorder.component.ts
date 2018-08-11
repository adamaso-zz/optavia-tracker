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
    console.log('m', this.myReorderList);
  }

  removeFromList(index) {
    console.log('m', this.myReorderList);

    this.myReorderList.splice(index, 1);
    console.log('n', this.myReorderList);

    localStorage.setItem('reorder', JSON.stringify(this.myReorderList));
  }

}
