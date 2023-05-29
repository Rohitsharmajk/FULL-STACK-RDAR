import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  token:string|null=null;
  user:string|null=null;

  constructor(private router: Router) {

    this.token= localStorage.getItem('admintoken');
    this.user= localStorage.getItem('adminUser');
    if(this.user==null)
    {
      this.router.navigate(['admin-login']);
    }
   
  }

  addFlight()
  {

    this.router.navigate(['addFlight']);
  }

  updateDeleteFlight()
  {

    this.router.navigate(['updateRemoveFlight']);
  }
 
  fetchFlight()
  {
   
    this.router.navigate(['deleteFlight']);
  }
}
