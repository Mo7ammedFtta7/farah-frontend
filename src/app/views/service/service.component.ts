import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  id: string;
  service
  dynamicInfo=[];

  constructor(private api:ApiService,private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    }

  ngOnInit() {

    this.api.get("services/"+this.id).subscribe(res=>{

      this.service=  res['data'] ;
      this.dynamicInfo=this.service['dynamic_infos']

    })


  }

}
