import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  @Output() boxEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  hideBox(boxNum) {
    this.boxEvent.emit(boxNum);
  }
  
}
