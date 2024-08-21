import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  templateUrl: './views/basic.html'
})
export class DatePickerExample implements OnInit {
  date: any = new Date();
  settings = {
    bigBanner: false,
    timePicker: false,
    format: 'MMMM-yyyy',
    defaultOpen: true,
    closeOnSelect: false,
    rangepicker: false
  }
  constructor() {

  }
  onDateSelect(date: any){
    console.log(date);
  }
  ngOnInit() {

  }
  title: string = "Ejemplo datepicker";
}
