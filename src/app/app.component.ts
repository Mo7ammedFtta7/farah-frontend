import { Component } from '@angular/core';
import { ApiService } from './services/api/api.service';
import { DataService } from './services/dataStore/data.service';
import { TranslationService } from './services/translation/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'farah-frontend';

  constructor(private api :ApiService,private dataStore:DataService,private trans:TranslationService){}

  ngOnInit() {
  //console.log( this.dataStore.etServices())
  if (this.trans.local=="ar"){
  require("style-loader!src/assets/dist/css/bootstrap-rtl.min.css");
  require("style-loader!src/assets/dist/css/main-rtl.css");
  }
  }


}
