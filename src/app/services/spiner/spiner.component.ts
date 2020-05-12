import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spiner',
  template: `
  <span id="{{name}}" class="spinner-grow spinner-grow-sm" style="display:none;"></span>
  `,
  styles: []
})
export class SpinerComponent implements OnInit {

  @Input() name :string

  constructor() { 

  }
  // ID:string
  ngOnInit() {
   }

  // show(){
  //   var x = document.getElementById(this.ID); 
  //     x.style.display = "block";
  // }

  // hide(){
  //   var x = document.getElementById(this.ID); 
  //     x.style.display = "none";
  // }

}
