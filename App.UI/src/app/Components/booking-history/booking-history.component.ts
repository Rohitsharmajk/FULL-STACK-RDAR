import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlightManagementService } from 'src/app/services/flight-management.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent {
  
  token:string;
  arr:[]=[];
  constructor(private router: Router,private flightmgmservice:FlightManagementService) {
    this.token=this.router.getCurrentNavigation()?.extras.state?.['example'];

    this.flightmgmservice.FetchHistory(this.token)
    .subscribe(
      (response: any) => {
        this.arr=response;
          console.log(response);
          
      }, 
      (error: any) => {
          console.log(error)
      })

  }



}
