import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { flightDto, loginDto, registerDto } from '../Models/user.model';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FlightManagementService {

  baseApiUrl:string=environment.baseApiUrl;

  constructor(private http:HttpClient) {
   }

   loginUserApi(request:loginDto)
   {
    return this.http.post(this.baseApiUrl+'Account/login',request,{responseType: 'text'});
   }
   registerUserApi(request:registerDto)
   {
    return this.http.post(this.baseApiUrl+'Account/register',request,{responseType: 'text'});
   }
   FetchFlightDetailsApi(token:string)
   {
    // const header = new Headers({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${token}`
    // })
    const httpOptions:Object = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
    };
    return this.http.get(this.baseApiUrl+'Booking/getdetails', httpOptions)
   }
}
