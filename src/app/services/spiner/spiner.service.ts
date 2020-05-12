import { Injectable } from '@angular/core';
import { spinner } from './spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinerService {

  constructor() { 
  }

  public spin= spinner;

}
