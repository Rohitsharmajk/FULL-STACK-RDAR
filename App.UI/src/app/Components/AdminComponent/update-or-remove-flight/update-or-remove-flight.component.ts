import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { FlightManagementService } from 'src/app/services/flight-management.service';

@Component({
  selector: 'app-update-or-remove-flight',
  templateUrl: './update-or-remove-flight.component.html',
  styleUrls: ['./update-or-remove-flight.component.css']
})
export class UpdateOrRemoveFlightComponent {
  data:any=[];
  token:string|null='';
  user:string|null=null;
  detail:any;
  searchQuery: string = '';
 
   constructor(private router :Router,private flightmgmservice:FlightManagementService,private toast:NgToastService){
 
     this.token= localStorage.getItem('admintoken');
     this.user= localStorage.getItem('adminUser');
     if(this.user==null)
     {
       this.router.navigate(['admin-login']);
     }
   
    //  console.log("**********  "+this.token);

     this.flightmgmservice.FetchAllFlightDetailsApi(this.token)
    .subscribe(
      (response: any) => {
        this.data=response;
          console.log(response);
          
      }, 
      (error: any) => {
        console.log(error);

      })
   
 
 
 
   }
   
 
   ngOnInit(): void { 
   
   }
   updateFlight(id:number,i:number)
   {
      this.router.navigate(['updateFlight'],{ state: { obj: this.data[i] } });
   }
   deleteFlight(id:number)
   {
    this.flightmgmservice.DeleteFlightApi(this.token,id)
    .subscribe(
      (response: any) => {
        this.openSuccess();
          console.log(response);
          setTimeout(()=>{
            window.location.reload();
          },2000);
      }, 
      (error: any) => {
        console.log(error.status);
        if(error.status==200)
        {
          this.openSuccess();
          setTimeout(()=>{
            window.location.reload();
          },2000);
        }

      });
   }

   openSuccess(){
    this.toast.success({detail:'Success',summary:'Flight Deleted',position:'tr',duration:3000})
    }
    openFailure(errorr:any){
      this.toast.error({detail:'Failed',summary:errorr,position:'tr',duration:3000})
      }

      //Search
      

      rowFilter = (obj: any): boolean => {
    if (!this.searchQuery) {
      // If no search query is provided, show all rows
      return true;
    }

    return (
      obj.flight_Name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      obj.source.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      obj.destination.toLowerCase().includes(this.searchQuery.toLowerCase()) || obj.flight_ID==this.searchQuery
    );
  }
 
}
