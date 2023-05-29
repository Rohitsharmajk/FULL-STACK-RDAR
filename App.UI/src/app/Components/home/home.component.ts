import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  token:string|null=null;
  user:string|null=null;

  constructor(private router: Router) {
    // console.log(environment.userName);
    this.token= localStorage.getItem('token');
    this.user= localStorage.getItem('user');
    if(this.user==null)
    {
      this.router.navigate(['login']);
    }
    console.log(this.token);
  }

  bookdetails()
  {
    // console.log(1);
    this.router.navigate(['getDetails']);
  }

  checkin()
  {
    this.router.navigate(['checkIn']);
  }

  bookinghistory()
  {
    this.router.navigate(['bookingHistory']);
  }

}
