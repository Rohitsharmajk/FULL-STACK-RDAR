import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App.UI';
  user:string|null=null;
  adminUser:string|null=null;
  constructor(private router :Router)
  {
    //var res=localStorage.getItem('currentUser');
    //console.log(res);
    this.user= localStorage.getItem('user');
    this.adminUser=localStorage.getItem('adminUser');
   console.log(this.user);
   console.log(this.adminUser);
  }
  
  ngOnInit() {

  }

  logout()
  {
    // console.log(environment.userName);
    //localStorage.setItem('currentUser','nouser');
    localStorage.removeItem('user');
    localStorage.removeItem('adminUser');
    this.user=null;
    this.adminUser=null;
    this.router.navigate(['login']);
  // .then(() => {
  //   window.location.reload();
  // });
  }
navigateHome()
{
  if(this.user!=null)
    this.router.navigate(['home']);
  else 
  this.router.navigate(['admin-home']);
}
adminLogin()
{
  console.log(2);
  this.router.navigate(['admin-login']);
}
userLogin()
{
  console.log(2);
  this.router.navigate(['login']);
}


}
