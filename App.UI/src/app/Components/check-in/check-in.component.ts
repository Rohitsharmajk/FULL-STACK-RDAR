import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { obj } from 'src/app/Models/user.model';
import { FlightManagementService } from 'src/app/services/flight-management.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent {
 
  token: string|null=null;
  user:string|null=null;

  idValue?:number;
  statusCode?:number;
  message?:string;
  isLoading:boolean=false;
  constructor(private router :Router,private flightmgmservice:FlightManagementService,private toast:NgToastService)
  {
    this.token= localStorage.getItem('token');
    this.user= localStorage.getItem('user');
    if(this.user==null)
    {
      this.router.navigate(['login']);
    }
    console.log(this.token);
  }
  checking()
  {
    // console.log(this.idValue);
    this.isLoading=true;
    this.flightmgmservice.checkInAPI(this.token,this.idValue)
        .subscribe(
        (response: any) => {
            this.isLoading=false;
            this.statusCode=response.status;
            this.openSuccess(response.message);
            
        }, 
        (error: any) => {
          console.log(error.error);
          this.isLoading=false;
          this.statusCode=error.status;
          if(error.status==200)
          {
            this.openSuccess(error.text);
          }
          else if(error.status==401)
          {
            this.openFailure('Session Expired');
          }
          else{
            this.openFailure('Incorrect/Already Boarded');
          }
        })
  }

  openSuccess(msg:any){
    this.toast.success({detail:'Success',summary:'Checked in successfully!',position:'tr',duration:2000})
    }
    openFailure(msg:any){
      this.toast.error({detail:'Failed',summary:msg,position:'tr',duration:2000})
      }
}
