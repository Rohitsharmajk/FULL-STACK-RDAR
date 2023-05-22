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
  }     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
