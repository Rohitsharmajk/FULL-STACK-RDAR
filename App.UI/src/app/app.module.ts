import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { BookFlightComponent } from './Components/book-flight/book-flight.component';
import { GetDetailsComponent } from './Components/get-details/get-details.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { BookPayComponent } from './Components/book-pay/book-pay.component';
import { ThankYouPageComponent } from './Components/thank-you-page/thank-you-page.component';
import { CheckInComponent } from './Components/check-in/check-in.component';
import { BookingHistoryComponent } from './Components/booking-history/booking-history.component';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { LoadingSpinnerComponent } from './Shared/loading-spinner/loading-spinner.component';
import { NgToastModule } from 'ng-angular-popup';
import { AdminLoginComponent } from './Components/AdminComponent/admin-login/admin-login.component';
import { AdminHomeComponent } from './Components/AdminComponent/admin-home/admin-home.component';
import { AddFlightComponent } from './Components/AdminComponent/add-flight/add-flight.component';
import { UpdateOrRemoveFlightComponent } from './Components/AdminComponent/update-or-remove-flight/update-or-remove-flight.component';
import { UpdateFlightComponent } from './Components/AdminComponent/update-flight/update-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BookFlightComponent,
    GetDetailsComponent,
    BookPayComponent,
    ThankYouPageComponent,
    CheckInComponent,
    BookingHistoryComponent,
    LoadingSpinnerComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AddFlightComponent,
    UpdateOrRemoveFlightComponent,
    UpdateFlightComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
