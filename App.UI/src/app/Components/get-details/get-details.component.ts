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
    date:new Date(),
    name:'',
    fare:0,
    id:-1
  };
  token:string='';
  sources:string[]=[];
  dests:string[]=[];
  data=[];

  constructor(private router :Router,private flightmgmservice:FlightManagementService){
    this.token=this.router.getCurrentNavigation()?.extras.state?.['example'];
    console.log(this.token);

    // console.log(2)
    // console.log(this.token);

    this.flightmgmservice.FetchFlightDetailsApi(this.token)
    .subscribe(
      (response: any) => {
        this.sources=response.source;
        this.dests=response.destination;
          // console.log(this.dests);
          
      }, 
      (error: any) => {
          console.log(error)
      })

  }
  

  ngOnInit(): void { 
  
  }

  getFlightDetails()
    {
      if(this.flightDetailsRequest.source!==this.flightDetailsRequest.destination)
      {
        //console.log(this.flightDetailsRequest);
        this.flightmgmservice.FetchSpecificFlightDetailsApi(this.token,this.flightDetailsRequest)
        .subscribe(
        (response: any) => {
          
            console.log(this.flightDetailsRequest);
            this.data=response;
            this.router.navigate(['bookFlight'], { state: { example: this.data, example2:this.token ,flightdetail:this.flightDetailsRequest} });
            
        }, 
        (error: any) => {
            console.log(error)
        })

        
      }
      else
      {
        console.log("souce and destination cannot be same");
      }
      
      
    }

}
