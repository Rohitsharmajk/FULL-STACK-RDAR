import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { flightDto, loginDto, registerDto } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FlightManagementService {

  baseApiUrl:string=environment.baseApiUrl;

  constructor(private http:HttpClient) {
   }

   //Login API
   loginUserApi(request:loginDto)
   {
    return this.http.post(this.baseApiUrl+'Account/login',request,{responseType: 'text'});
   }
   //Register API
   registerUserApi(request:registerDto)
   {
    return this.http.post(this.baseApiUrl+'Account/register',request,{responseType: 'text'});
   }

   //Get flight detail
   FetchFlightDetailsApi(token:string)
   {
    const httpOptions:Object = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
    };
    return this.http.get(this.baseApiUrl+'Booking/getdetails', httpOptions)
   }

      //Get flight detail
      FetchSpecificFlightDetailsApi(token:string,requestData:flightDto)
      {
       const httpOptions:Object = {
         headers:new HttpHeaders({
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${token}`,
         }),
       };
       return this.http.get(this.baseApiUrl+`Booking/bookflight?source=${requestData.source}&destination=${requestData.destination}&date=${requestData.date}`, httpOptions)
      }

}
