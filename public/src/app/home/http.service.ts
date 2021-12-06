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
    return this._http.get( "http://localhost:8080/bakers" )
  }

}
