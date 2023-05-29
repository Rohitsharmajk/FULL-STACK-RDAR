import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { GetDetailsComponent } from './Components/get-details/get-details.component';
import { BookFlightComponent } from './Components/book-flight/book-flight.component';
import { BookPayComponent } from './Components/book-pay/book-pay.component';
import { ThankYouPageComponent } from './Components/thank-you-page/thank-you-page.component';
import { CheckInComponent } from './Components/check-in/check-in.component';
import { BookingHistoryComponent } from './Components/booking-history/booking-history.component';
import { AdminLoginComponent } from './Components/AdminComponent/admin-login/admin-login.component';
import { AdminHomeComponent } from './Components/AdminComponent/admin-home/admin-home.component';
import { AddFlightComponent } from './Components/AdminComponent/add-flight/add-flight.component';
import { UpdateOrRemoveFlightComponent } from './Components/AdminComponent/update-or-remove-flight/update-or-remove-flight.component';
import { UpdateFlightComponent } from './Components/AdminComponent/update-flight/update-flight.component';

const routes: Routes = [
  // 
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  } ,
  {
    path:'getDetails',
    component:GetDetailsComponent
  } ,
  {
    path:'bookFlight',
    component:BookFlightComponent
  } ,
  {
    path:'bookPay/:id',
    component:BookPayComponent
  },
  {
    path:'thankYouPage',
    component:ThankYouPageComponent
  }, 
  {
    path:'checkIn',
    component:CheckInComponent
  },
  {
    path:'bookingHistory',
    component:BookingHistoryComponent
  } ,
  {
    path:'admin-login',
    component:AdminLoginComponent
  },
  {
    path:'admin-home',
    component:AdminHomeComponent
  },
  {
    path:'addFlight',
    component:AddFlightComponent
  },
  {
    path:'updateRemoveFlight',
    component:UpdateOrRemoveFlightComponent
  },
  {
    path:'updateFlight',
    component:UpdateFlightComponent
  }           
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
