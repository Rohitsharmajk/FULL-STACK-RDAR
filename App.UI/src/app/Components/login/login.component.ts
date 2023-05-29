import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { loginDto } from 'src/app/Models/user.model';
import { FlightManagementService } from 'src/app/services/flight-management.service';
import { environment } from 'src/environments/environment.development';

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
  // user:string='nouser';
  // token:string="notoken";
    constructor(private router :Router,private flightmgmservice:FlightManagementService,private toast:NgToastService){
      var res=localStorage.getItem('user');
      if(res!=null)
      {
        // console.log(res+"  hey");
        this.router.navigate(['home']);
      }

      res=localStorage.getItem('adminUser');
      if(res!=null)
      {
        // console.log(res+"  hey");
        this.router.navigate(['admin-home']);
      }

    }
    ngOnInit(): void {
      
    }
    loginUser()
    {
      // console.log(this.loginUserRequest);
      this.flightmgmservice.loginUserApi(this.loginUserRequest)
      .subscribe(
        (response: any) => {
            // console.log(response);
            localStorage.setItem('user', this.loginUserRequest.UserName.toString());
            localStorage.setItem('token', response);
            this.openSuccess();
            setTimeout(()=>{
              
              this.router.navigate(['home'])
              .then(() => {
                window.location.reload();
              });
            },1000);
  
        }, 
        (error: any) => {
          this.openFailure(error.error);
            this.error=error.error;
        })
    }

    openSuccess(){
      this.toast.success({detail:'Success',summary:'Login is successfull',position:'tr',duration:3000})
      }
      openFailure(errorr:any){
        this.toast.error({detail:'Failed',summary:errorr,position:'tr',duration:3000})
        }

}
