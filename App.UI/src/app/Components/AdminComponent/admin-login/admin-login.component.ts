import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { loginDto } from 'src/app/Models/user.model';
import { FlightManagementService } from 'src/app/services/flight-management.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  loginUserRequest:loginDto={
    UserName:'',
    Password:''
  };
  error:string='';
    constructor(private router :Router,private flightmgmservice:FlightManagementService,private toast:NgToastService){
      var res=localStorage.getItem('adminusser');
      if(res!=null)
      {
        this.router.navigate(['admin-home']);
      }

    }
    ngOnInit(): void {
      
    }
    loginUser()
    {
      // console.log(this.loginUserRequest);
      this.flightmgmservice.loginAdminApi(this.loginUserRequest)
      .subscribe(
        (response: any) => {

            localStorage.setItem('adminUser', this.loginUserRequest.UserName.toString());
            localStorage.setItem('admintoken', response);
            this.openSuccess();
            setTimeout(()=>{
         
              this.router.navigate(['admin-home'])
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
