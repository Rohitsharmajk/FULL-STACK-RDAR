import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { flightDtoo } from 'src/app/Models/user.model';
import { FlightManagementService } from 'src/app/services/flight-management.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent {
  token:string|null=null;
  user:string|null=null;
  isLoading:boolean=false;

  flight?:flightDtoo={
    flight_Name:'',
    source:'',
    destination:'',
    flight_ID:0,
    boarding_Time:'',
    fare:0
 
   };

  constructor(private router :Router,private flightmgmservice:FlightManagementService,private route: ActivatedRoute,private toast:NgToastService){

    this.token= localStorage.getItem('admintoken');
    this.user= localStorage.getItem('adminUser');
    if(this.user==null)
    {
      this.router.navigate(['login']);
    }

    var res=this.router?.getCurrentNavigation()?.extras.state?.['obj'];
    if(res!=null)
    {
      this.flight=res;
    }

  }


  updateFlight()
  {
    console.log("hm");
    console.log(this.token);
    this.flightmgmservice.UpdateFlightApi(this.token,this.flight)
    .subscribe(
      (response: any) => {
          this.openSuccess();
          setTimeout(()=>{
            this.router.navigate(['updateRemoveFlight']);
          },1000);
      }, 
      (error: any) => {
        console.log(error);
        if(error.status==200)
        {
          this.openSuccess();
          setTimeout(()=>{
            this.router.navigate(['updateRemoveFlight']);
          },3000);
        }
      })
  }

  openSuccess(){
    this.toast.success({detail:'Success',summary:'Flight Details Updated',position:'tr',duration:3000})
    }
    openFailure(errorr:any){
      this.toast.error({detail:'Failed',summary:errorr,position:'tr',duration:3000})
      }
}
