import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightManagementService } from 'src/app/services/flight-management.service';

@Component({
  selector: 'app-thank-you-page',
  templateUrl: './thank-you-page.component.html',
  styleUrls: ['./thank-you-page.component.css']
})
export class ThankYouPageComponent {
  obj: any;
  detail:any;
  constructor(private router :Router,private flightmgmservice:FlightManagementService,private route: ActivatedRoute){
    this.obj=this.router.getCurrentNavigation()?.extras.state?.['example'];
    this.detail=this.router.getCurrentNavigation()?.extras.state?.['flightdetail'];
    console.log(this.detail.date);
    this.route.params.subscribe(res => {
      console.log(this.obj);
    }); 
  }
}
