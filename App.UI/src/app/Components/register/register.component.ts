import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router:Router,private flightmgmservice:FlightManagementService){}

  registerUser()
  {
    console.log(this.registerUserRequest);
    if(this.registerUserRequest.ConfirmPass===this.registerUserRequest.Password)
    {
      this.flightmgmservice.registerUserApi(this.registerUserRequest)
      .subscribe((reponse:any)=>{
        console.log(reponse);
        this.router.navigate(['login']);
      },
      (error:any)=>{
        console.log(error);
      }
      )
    }
  }

}
