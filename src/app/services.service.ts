import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  data$ = new BehaviorSubject(' ') ;
  data1$ = new BehaviorSubject(' ');
  

  setData(serviceData:any){
    this.data$.next(serviceData);
  }
}
