import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { DataService } from 'src/app/services/dataStore/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  serviceTypes=[];
  services=[];

  states=[];
  cities=[];
  areas=[];
  id: string;
  search:string;

  constructor(private api:ApiService,private dataStor:DataService ,private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.queryParams.subscribe(params=>{
      this.search= params['search']!=undefined?params['search']:null;
    })
  }

  ngOnInit() {

    this.serviceTypes=this.dataStor.getServiceTypes()
    this.states=this.dataStor.getStates()
    this.cities=this.dataStor.getCitis(this.states[0]['id'])
    this.areas=this.dataStor.getAreas(this.cities, this.cities[0]['id'])
this.getServices();

  }


  getServices(){

    this.api.get('services/?serviceType='+this.id).subscribe(res=>{

          this.services=res['data']
    })
    }
  

}
