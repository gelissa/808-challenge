import { Component, OnInit, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component'
import { EventEmitter } from 'events';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input() elements = [
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
    { id: 4, value: '' },
    { id: 5, value: '' },
    { id: 6, value: '' },
    { id: 7, value: '' },
    { id: 8, value: '' },
    { id: 9, value: '' },
    { id: 10, value: '' },
    { id: 11, value: '' },
    { id: 12, value: '' },
    { id: 13, value: '' },
    { id: 14, value: '' },
    { id: 15, value: '' },
    { id: 16, value: '' },
  ]; 

@Input() mouseClick = new EventEmitter();

mouseClicker() {
  console.log(this.mouseClick);
}

constructor() { 

}

ngOnInit(): void {
}

}
