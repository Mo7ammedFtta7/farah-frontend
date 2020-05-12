import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
  <div  *ngIf="messages.length!=0" id="{{id}}" class="alert alert-{{type}}">
    <ul>
        <li *ngFor="let message of messages" >{{message}}</li>
    </ul>
  </div>
  `,
  styles: []
})
export class MessageComponent implements OnInit {

  constructor() { }
  @Input()  type :string;
  @Input()  id:string;
  @Input()  messages :[];
  ngOnInit() {
  }

}
