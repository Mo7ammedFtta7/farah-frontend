import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Observable, throwError, Subscription } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private auth :AuthService,private http: HttpClient) { }



  serverUrl=environment.server;

  httpOptions(): any {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Content-Type', 'multipart/form-data');
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
    return this.http.post(this.serverUrl+url,data, this.httpOptions()).pipe( retry(2),
    catchError(this.errorHandler)
    );
  }


  errorHandler(error: HttpErrorResponse) {
      if (error.status === 422) {
        Object.keys(error.error.errors).forEach(kye => {
         // Swal.fire("Opps",error.error.data[kye][0],"error");
         console.log(kye + ": "+ error.error.errors[kye][0])
        });
      }
    // if (error.status === 401) {

    //     this.router.navigate(['/login']);
    // }

    return throwError(error);
  }


}
