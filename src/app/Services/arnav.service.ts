import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ArnavService {

 
  constructor( public _http:HttpClient) { }


  sendData(data:any){
    const url='https://webhook.site/e3f7be0a-ab85-4c9f-a62e-0f115523c06d';
    let headers=new HttpHeaders({
      'Content-Type':'application/json',
    });
    let postOpt=Object.assign({headers:headers,method:'post'})
    return this._http.post(url,data,postOpt)
  }

}
