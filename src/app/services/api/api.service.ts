import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Observable, throwError, Subscription } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private auth :AuthService,private http: HttpClient) { }



  serverUrl=environment.server;

  httpOptions(): any {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
   // headers = headers.append('Content-Type', 'multipart/form-data');
   // headers = headers.append('Lang', this.trans.getlocalLang());
    if (this.auth.loggedIn()) {
      headers = headers.append('Authorization', `Bearer  ${this.auth.user().token}`);
    }
    return { headers };
  }




  public get(url) {
    return this.http.get(this.serverUrl+url, this.httpOptions())
  }

  public post(url,data) {
    return this.http.post(this.serverUrl+url,data, this.httpOptions()).pipe( retry(1),
    catchError(this.errorHandler)
    );
  }


  errorHandler(error: HttpErrorResponse) {
    
      if (error.status === 422) {
       var err=[];
        Object.keys(error.error.errors).forEach(kye => {
          error.error.errors[kye].forEach(msg => {
          err.push(msg);
          });
        });
        
      //   console.log(err)

      //  Swal.fire("Opps",err.toString(),"error");

      }
      error.headers.set('error',err)
    // if (error.status === 401) {

    //     this.router.navigate(['/login']);
    // }

    return throwError(error);
  }


}
