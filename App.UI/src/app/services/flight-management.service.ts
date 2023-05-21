import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { flightDto, loginDto, registerDto } from '../Models/user.model';
import { Observable } from 'rxjs';

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
   FetchFlightDetailsApi(request:flightDto)
   {
    return this.http.post(this.baseApiUrl+'Account/getdetails',request);
   }
}
