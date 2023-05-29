import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { flightDto, flightDtoo } from 'src/app/Models/user.model';
import { FlightManagementService } from 'src/app/services/flight-management.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent {
  token:string|null=null;
  user:string|null=null;
  isLoading:boolean=false;

  today = new Date().toISOString().slice(0, 16);
  


  constructor(private router :Router,private flightmgmservice:FlightManagementService,private route: ActivatedRoute,private toast:NgToastService){

    this.token= localStorage.getItem('admintoken');
    this.user= localStorage.getItem('adminUser');
    if(this.user==null)
    {
      this.router.navigate(['login']);
    }



  }

  flight:flightDtoo={
    flight_Name:'',
   source:'',
   destination:'',
   flight_ID:0,
   boarding_Time:'',
   fare:0

  };


  addFlight()
  {

    if(this.flight.source.toLowerCase()!=this.flight.destination.toLowerCase())
    {
      this.flightmgmservice.AddFlightApi(this.token,this.flight)
      .subscribe(
        (response: any) => {
          
          this.flight.boarding_Time='';
          this.flight.destination='';
          this.flight.fare=0;
          this.flight.flight_Name='';
          this.flight.source='';
  
          
            this.openSuccess();
            setTimeout(()=>{
              this.router.navigate(['admin-home'])
              .then(() => {
                window.location.reload();
              });
            },1000);
            
        }, 
        (error: any) => {
        
          if(error.status==200)
          {
            this.openSuccess();
            setTimeout(()=>{
              this.router.navigate(['admin-home'])
              .then(() => {
                window.location.reload();
              });
            },3000);
          }
          else{
            this.openFailure("Failed to Add Flight");
          }
       
  
        })
    }
    else{
      this.openFailure("Source and Destination cannot be same");
    }
  }

  openSuccess(){
    this.toast.success({detail:'Success',summary:'Flight Added Successfully',position:'tr',duration:3000})
    }
    openFailure(errorr:any){
      this.toast.error({detail:'Failed',summary:errorr,position:'tr',duration:3000})
      }
  
}
