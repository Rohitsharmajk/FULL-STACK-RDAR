import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { passengerDto } from 'src/app/Models/user.model';
import { FlightManagementService } from 'src/app/services/flight-management.service';

@Component({
  selector: 'app-book-pay',
  templateUrl: './book-pay.component.html',
  styleUrls: ['./book-pay.component.css']
})
export class BookPayComponent {

  token:string='';
  flightID:number=12;
  detail:any;
  constructor(private router :Router,private flightmgmservice:FlightManagementService,private route: ActivatedRoute){
    this.token=this.router.getCurrentNavigation()?.extras.state?.['example'];
    this.detail=this.router.getCurrentNavigation()?.extras.state?.['flightdetail'];
    this.route.params.subscribe(res => {
      console.log(this.token);
      this.flightID=res['id'];
    }); 
  }

  passenger:passengerDto={
    Name:'',
    Email:'',
    Gender:'',
  };
  arr:passengerDto[]=[];

  bookTicket()
  {
    var obj={
      flightId:this.flightID,
      passengers:this.arr
    };
    console.log(obj);
    this.flightmgmservice.BookTicketApi(this.token,obj)
        .subscribe(
        (response: any) => {
          
            console.log(this.detail);
            this.router.navigate([`thankYouPage`], { state: { example: response,flightdetail:this.detail} });
            
        }, 
        (error: any) => {
            console.log(error);
        }
        )
  }
  AddBanda()
  {

    let temp:passengerDto={
      Name:this.passenger.Name,
      Email:this.passenger.Email,
      Gender:this.passenger.Gender,
      Age:this.passenger.Age,
      Phone:this.passenger.Phone
    };

    
    
    this.arr.push(temp);
    // console.log(this.arr);
  }
  deleteBanda(email:string)
  {
   
    let index:number=this.arr.findIndex(x=>x.Email===email);
    this.arr.splice(index,1);
    // console.log(this.arr);
  }
}
