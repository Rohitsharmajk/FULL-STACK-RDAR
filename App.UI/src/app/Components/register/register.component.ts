import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { registerDto } from 'src/app/Models/user.model';
import { FlightManagementService } from 'src/app/services/flight-management.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerUserRequest:registerDto={
    UserName:'',
    Password:'',
    ConfirmPass:''
  };
  errormessage1:string="";
  error:string="";

  constructor(private router:Router,private flightmgmservice:FlightManagementService,private toast:NgToastService){}

  registerUser()
  {
    // console.log(this.registerUserRequest);
    // if(this.registerUserRequest.Password==='' || this.registerUserRequest.ConfirmPass==='' || this.registerUserRequest.UserName===''){
      
      
    // }
    // else{
      if(this.registerUserRequest.ConfirmPass===this.registerUserRequest.Password)
      {
        // if(this.registerUserRequest.Password.length<6){
        //   // console.log("Length of Password should be more than 6.")
        // }
        this.flightmgmservice.registerUserApi(this.registerUserRequest)
        .subscribe((reponse:any)=>{
          console.log(reponse);
          this.openSuccess();
          setTimeout(()=>{
            this.router.navigate(['login']);
          },3000);
          
        },
        (error:any)=>{
          // this.error=error.error;
          this.openFailure(error.error)
          // if(error.status= 400){
          //   console.log("Password length should be 6")
          // }
        }
        )
      }
      else{
        // this.errormessage1=;
        this.openFailure("Password and confirm password do not match");
      }
    
    
  }

  openSuccess(){
    this.toast.success({detail:'Success',summary:'Registration is successfull',position:'tr',duration:3000})
    }
    openFailure(errorr:any){
      this.toast.error({detail:'Failed',summary:errorr,position:'tr',duration:3000})
      }

}
