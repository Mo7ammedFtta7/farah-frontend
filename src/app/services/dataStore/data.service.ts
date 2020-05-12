import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { sync } from 'glob';
import { TranslationService } from '../translation/translation.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private  serviceTypes ;
  private states: []=[];
  private cities: []=[];

  constructor(private api: ApiService,private trans : TranslationService) {
  }

  ngOnInit(): void {
    console.log('data Services init');
  }

  findIn(array,obj,key,val){
    if(array.length>0){
      var found = array.find(function(element) { 
        return element[key]===val; 
      }); 
      return found[obj];
    }
    else{
      return []
    }
  }

  getServiceTypes() {
   return this.serviceTypes
  }

  getStates(){
    return this.states
  }

  getCitis(stateID)
  {
    return this.findIn(this.states,'cities','id',stateID)
  };

  getAreas(ctites,cityID)
  {
    return this.findIn(ctites,'areas','id',cityID)
  };

 callStates(){
    return new Promise((resolve, reject) => {
      this.api
          .get('states/country/1')
          .subscribe(response => {
              this.states = response['data'] ;
              resolve(true);
          })
  })
  }

  load() {
    console.log('data Services loaded');
    this.callStates()
    return new Promise((resolve, reject) => {
        this.api
            .get('service_types')
            .subscribe(response => {
                this.serviceTypes = response;
                resolve(true);
            })
    })
}
}
