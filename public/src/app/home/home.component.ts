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
    console.log("We are going to fetch the tasks list!");
    this._httpService.fetchBakers()
    .subscribe( (data:any) => {
      this.bdBakers = data.baker;
      console.log( "All Bakers: ", this.bdBakers );
    });
  }

  cakeSubmit(){
    /*let observable = this._httpService.addCake(this.newCake);
    observable.subscribe(data => {
      console.log("~Create Cake~");
    })
    this.newCake = { baker: "", image: "" }
    this.getCakesFromService();*/
  }


}
