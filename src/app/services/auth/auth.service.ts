import { Injectable } from '@angular/core';
import { EncryptionService } from '../encryption/encryption.service'

import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiService } from '../api/api.service';
@Injectable()
export class AuthService {

  secretKey = 'sfsdfkjblsfaxzgmb@aasdsd^gsaj)s9hfds^f@3s4!';
  token="9hfds^f@3s4!";

  constructor(private crypt: EncryptionService) {}
  // ...
  public loggedIn(): boolean {
    return this.getToken()!==null;
  }



  logoutUser() {
    //localStorage.removeItem(this.secretKey)
    localStorage.removeItem(this.token)
   // this._router.navigate(['/home'])
   // window.location.reload()
  }

  getToken() {
    return localStorage.getItem(this.token)
  }

  setUser(data) {
     localStorage.setItem(this.token,this.crypt.encrypt(this.token, JSON.stringify(data)   ));
     return true;
  }


  user() {
    return JSON.parse(this.crypt.decrypt(this.token, this.getToken()));
  }



}