import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlightManagementService } from 'src/app/services/flight-management.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent  {
  
  token:string|null=null;
  user:string|null=null;

  arr:[]=[];
  constructor(private router: Router,private flightmgmservice:FlightManagementService) {
    this.token= localStorage.getItem('token');
    this.user= localStorage.getItem('user');
    if(this.user==null)
    {
      this.router.navigate(['login']);
    }

    console.log(this.token+" ****");

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

  delNow(id:number)
  {
    console.log(id);
    this.flightmgmservice.CancelTicketApi(this.token,id)
    .subscribe(
      (response: any) => {
          console.log(response);
          window.location.reload();
      }, 
      (error: any) => {
          console.log(error);
          if(error.status==200)
          {
            window.location.reload();
          }
      })
  }


}
