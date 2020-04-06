import { Injectable } from '@angular/core';
import { EncryptionService } from '../encryption/encryption.service'

import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiService } from '../api/api.service';
@Injectable()
export class AuthService {

  secretKey = 'sfsdfkjblsfgmb@asd^gsaj)s9hfds^f@3s4!';


  constructor(private crypt: EncryptionService) {}
  // ...
  public loggedIn(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return false;
  }



  logoutUser() {
    localStorage.removeItem(this.secretKey)
    localStorage.removeItem('data')
   // this._router.navigate(['/home'])
   // window.location.reload()
  }

  getToken() {
    return localStorage.getItem(this.secretKey)
  }



  user() {
    return JSON.parse(this.crypt.decrypt(this.secretKey, this.getToken().toString()));
  }



}