import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { GetDetailsComponent } from './Components/get-details/get-details.component';
import { BookFlightComponent } from './Components/book-flight/book-flight.component';

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
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
