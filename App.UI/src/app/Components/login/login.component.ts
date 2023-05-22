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
  error:string='';
    constructor(private router :Router,private flightmgmservice:FlightManagementService){
      var res=localStorage.getItem('currentUser');
      if(res!='nouser')
      {
        console.log(res+"  hey");
        this.router.navigate(['home']);
      }

    }
    ngOnInit(): void {
      
    }
    loginUser()
    {
      console.log(this.loginUserRequest);
      this.flightmgmservice.loginUserApi(this.loginUserRequest)
      .subscribe(
        (response: any) => {
            console.log(response);
            localStorage.setItem('currentUser', this.loginUserRequest.UserName.toString());
            this.router.navigate(['home'], { state: { example: response } }).then(() => {
              window.location.reload();
            });
  
        }, 
        (error: any) => {
            this.error=error.error;
        })
    }
}
