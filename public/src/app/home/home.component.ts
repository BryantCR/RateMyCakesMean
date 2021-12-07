import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bdBakers: any[] = [];

  newCake : any = {
    bakerFN : "",
    bakerLN : "",
    image : ""
  }

  newRating : any = {
    rating : Number,
    comment : ""
  }

  constructor(private _httpService: HttpService){
    this.getAllBakers();
  }

  ngOnInit(): void {
    
  }

  getAllBakers(): void {
    console.log("We are going to fetch the bakers list!");
    this._httpService.fetchBakers()
    .subscribe( (data:any) => {
      this.bdBakers = data.baker;
      console.log( "All Bakers: ", this.bdBakers );
    });
  }

  cakeSubmit(){
    let observable = this._httpService.fetchAddBakers(this.newCake);
    observable.subscribe( (data:any) => {
      console.log("Create Cake: ", data);
    })
  }

  ratingSubmit(id:any){
    console.log("Id", id);
    console.log("New rating", this.newRating);
    let observable = this._httpService.fetchAddRate( id, this.newRating);
    observable.subscribe(data => {
      console.log("Create Comment: ", data);
    })
  }

}
