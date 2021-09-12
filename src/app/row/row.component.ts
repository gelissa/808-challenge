import { Component, OnInit, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component'

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  @Input() elements = [
    { id: 1, value: 'q' },
    { id: 2, value: 'w' },
    { id: 3, value: 'e' },
    { id: 4, value: 'r' },
    { id: 5, value: 't' },
    { id: 6, value: 'y' },
    { id: 7, value: 'u' },
    { id: 8, value: 'i' },
    { id: 9, value: 'o' },
    { id: 10, value: 'p' },
    { id: 11, value: 'a' },
    { id: 12, value: 's' },
    { id: 13, value: 'd' },
    { id: 14, value: 'f' },
    { id: 15, value: 'g' },
    { id: 16, value: 'h' },
  ]; 


 makeRow(): typeof ButtonComponent {
  for (let i = 0; i > 16; i++) {
    return ButtonComponent;
  }
}

constructor() { 

}

ngOnInit(): void {
}

}
