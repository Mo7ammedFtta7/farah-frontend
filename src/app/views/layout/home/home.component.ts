import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { DataService } from 'src/app/services/dataStore/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchKey;
  selectedService;
  serviceTypes=[]

  constructor(private api:ApiService,private dataStor:DataService,private route:Router) { }

  ngOnInit() {
        this.serviceTypes=this.dataStor.getServiceTypes()
        this.api.get("states").subscribe(res=>{
          console.log(res);
        },
        err=>{
          console.log(err)
        })
      }


      search(){
        var seaerch = this.searchKey==null?"":'search='+this.searchKey;
        this.route.navigateByUrl ('services/'+this.selectedService+'?'+seaerch)
      }

}
