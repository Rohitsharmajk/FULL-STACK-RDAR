import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  token:string='';

  constructor(private router: Router) {
    this.token=this.router.getCurrentNavigation()?.extras.state?.['example'];
  }

  bookdetails()
  {
    // console.log(1);
    this.router.navigate(['getDetails'], { state: { example: this.token } });
  }

  checkin()
  {
    this.router.navigate(['checkIn'], { state: { example: this.token } });
  }

  bookinghistory()
  {
    this.router.navigate(['bookingHistory'], { state: { example: this.token } });
  }

}
