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
  token:string='';
  source:string[]=[];
  dest:string[]=[];

  constructor(private router :Router,private flightmgmservice:FlightManagementService){
    this.token=this.router.getCurrentNavigation()?.extras.state?.['example'];

    // console.log(2)
    // console.log(this.token);

    this.flightmgmservice.FetchFlightDetailsApi(this.token)
    .subscribe(
      (response: any) => {
          console.log(response);
          
      }, 
      (error: any) => {
          console.log(error)
      })

  }
  

  ngOnInit(): void { 
  
  }

  getFlightDetails()
    {
      console.log(this.flightDetailsRequest);
      
    }

}
