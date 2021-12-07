import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.fetchBakers();
  }

  fetchBakers(){
    return this._http.get( "http://localhost:8080/bakers" );
  }

  fetchAddBakers(newCake:any){
    console.log("Route POST Add: ", newCake);
    return this._http.post( "http://localhost:8080/baker", newCake );
  }

  fetchAddRate(id:any, data:any){
    console.log("Route POST Add: ", data);
    return this._http.post( "http://localhost:8080/cake", id, data );
  }

}
