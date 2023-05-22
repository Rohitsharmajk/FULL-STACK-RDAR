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
    BookingHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
