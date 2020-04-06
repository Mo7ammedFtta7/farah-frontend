import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
  selector: 'app-homedash',
  templateUrl: './homedash.component.html',
  styleUrls: ['./homedash.component.css']
})
export class HomedashComponent implements OnInit {
  calendarPlugins = [dayGridPlugin]; // important!

  constructor() { }

  ngOnInit() {
  }

}
