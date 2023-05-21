import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { loginDto } from 'src/app/Models/user.model';
import { FlightManagementService } from 'src/app/services/flight-management.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserRequest:loginDto={
    UserName:'',
    Password:''
  };

    constructor(private router :Router,private flightmgmservice:FlightManagementService){}
    ngOnInit(): void {
      
    }
    loginUser()
    {
      console.log(this.loginUserRequest);
      this.flightmgmservice.loginUserApi(this.loginUserRequest)
      .subscribe(
        (response: any) => {
            // console.log(response);
            this.router.navigate(['home'], { state: { example: response } });
        }, 
        (error: any) => {
            console.log(error)
        })
    }
}
