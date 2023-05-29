import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
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

  
  token:string|null=null;
  user:string|null=null;


  sources:string[]=[];
  dests:string[]=[];
  data=[];
  error:string='';
  error1:string='';
  

   today = new Date()

 year = this.today.getFullYear()
 month = this.today.getMonth() + 1 // the months are indexed starting with 0
 date = this.today.getDate()

 dateStr = `${this.year}-${this.month}-${this.date}`
  // input = document.querySelector('[name=pickup_date]').setAttribute('min', this.dateStr);
  //input.setAttribute('min', this.dateStr);

  isLoading:boolean=false;

  constructor(private router :Router,private flightmgmservice:FlightManagementService,private toast:NgToastService){
    this.token= localStorage.getItem('token');
    this.user= localStorage.getItem('user');
    if(this.user==null)
    {
      this.router.navigate(['login']);
    }
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
        this.openFailure(error.error);
      })

  }
  

  ngOnInit(): void { 
  
  }

  getFlightDetails()
    {
      if(this.flightDetailsRequest.source!==this.flightDetailsRequest.destination)
      {
        //console.log(this.flightDetailsRequest);
        this.isLoading=true;
        setTimeout(() => {
          this.flightmgmservice.FetchSpecificFlightDetailsApi(this.token,this.flightDetailsRequest)
          .subscribe(
          (response: any) => {
            
              // console.log(this.flightDetailsRequest);
              this.data=response;
              this.isLoading=false;
              this.router.navigate(['bookFlight'], { state: { example: this.data,flightdetail:this.flightDetailsRequest} });
              
          }, 
          (error: any) => {
              console.log(error)
              this.isLoading=false;
              this.openFailure(error.error);
          })
        }, 3000);

        
      }
      else
      {
        this.openFailure("Source and Destination cannot be same");
      }
      
      
    }

       openSuccess(){
      this.toast.success({detail:'Success',summary:'Login is successfull',position:'tr',duration:2000})
      }
      openFailure(errorr:any){
        console.log("hey");
        this.toast.error({detail:'Failed',summary:errorr,position:'tr',duration:2000})
        }

}
