import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { flightDto } from 'src/app/Models/user.model';
import { FlightManagementService } from 'src/app/services/flight-management.service';

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent {

  flightDetailsRequest:flightDto={
    source:'',
    destination:'',
    date:new Date()
  };
  constructor(private router :Router,private flightmgmservice:FlightManagementService){}

  getFlightDetails()
    {
      console.log(this.flightDetailsRequest);
      this.flightmgmservice.FetchFlightDetailsApi(this.flightDetailsRequest)
      .subscribe(
        (response: any) => {
            console.log(response);
            this.router.navigate(['book-flight']);
        }, 
        (error: any) => {
            console.log(error)
        })
    }

}
