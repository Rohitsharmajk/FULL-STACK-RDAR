import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { obj } from 'src/app/Models/user.model';
import { FlightManagementService } from 'src/app/services/flight-management.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent {
 
  token: string;
  idValue?:number;
  statusCode?:number;
  message?:string;
  constructor(private router :Router,private flightmgmservice:FlightManagementService)
  {
    this.token=this.router.getCurrentNavigation()?.extras.state?.['example'];
  }
  checking()
  {
    // console.log(this.idValue);
    this.flightmgmservice.checkInAPI(this.token,this.idValue)
        .subscribe(
        (response: any) => {
          
            this.statusCode=response.status;
            
        }, 
        (error: any) => {
          // console.log(error.error);
          this.statusCode=error.status;
          this.message=error.error;
        })
  }
}
