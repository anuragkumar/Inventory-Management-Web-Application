import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-field',
  templateUrl: './add-field.component.html',
  styleUrls: ['./add-field.component.css']
})
export class AddFieldComponent implements OnInit {
  defaultValue: number;
  constructor() { }

  ngOnInit() {
    this.defaultValue = 1;
  }

}
