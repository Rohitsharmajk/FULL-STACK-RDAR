import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App.UI';
  currentUser:string='nouser';
  constructor(private router :Router)
  {
    var res=localStorage.getItem('currentUser');
    console.log(res);
    if(res!=null)
    {
      this.currentUser=res;
    }
  }
  

  logout()
  {
    console.log("logout");
    localStorage.setItem('currentUser','nouser');
    this.router.navigate(['login'])
  .then(() => {
    window.location.reload();
  });
  }
navigateHome()
{
  this.router.navigate(['home']);
}

}
