import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { flightDto } from 'src/app/Models/user.model';
import { FlightManagementService } from 'src/app/services/flight-management.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent {
  
 data:any=[];
 token:string='';
 detail:any;
  constructor(private router :Router,private flightmgmservice:FlightManagementService){

    this.data=this.router.getCurrentNavigation()?.extras.state?.['example'];
    this.token=this.router.getCurrentNavigation()?.extras.state?.['example2'];
    this.detail=this.router.getCurrentNavigation()?.extras.state?.['flightdetail'];
    console.log("**********  "+this.token);
    // console.log(this.data);
    // console.log(this.data.flights[0].flight_ID);
    // for(let obj of this.data.flights)
    // {
    //   console.log(obj.flight_ID+"   ************8");
    // }



  }
  

  ngOnInit(): void { 
  
  }

bookNow(id:any)
{
  console.log("ye h book now", this.detail);
  this.router.navigate([`bookPay/${id}`], { state: { example: this.token,flightdetail:this.detail} });

}

}
