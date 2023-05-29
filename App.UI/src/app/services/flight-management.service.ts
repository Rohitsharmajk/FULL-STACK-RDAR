import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { flightDto, flightDtoo, loginDto, registerDto } from '../Models/user.model';

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
   FetchFlightDetailsApi(token:any)
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
      FetchSpecificFlightDetailsApi(token:any,requestData:flightDto)
      {
       const httpOptions:Object = {
         headers:new HttpHeaders({
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${token}`,
         }),
       };
       return this.http.get(this.baseApiUrl+`Booking/bookflight?source=${requestData.source}&destination=${requestData.destination}&date=${requestData.date}`, httpOptions)
      }

      //Book ticket based on passenger list
      BookTicketApi(token:any,requestData:any)
      {
       const httpOptions:Object = {
         headers:new HttpHeaders({
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${token}`,
         }),
       };
       return this.http.post(this.baseApiUrl+`Passenger_details/bookpay`,requestData, httpOptions)
      }
      

      //Check In APi
      checkInAPI(token:any,requestData?:number)
      {
       const httpOptions:Object = {
         headers:new HttpHeaders({
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${token}`,
         }),
       };
       return this.http.post(this.baseApiUrl+`checkin?BoardingID=${requestData}`,null ,httpOptions)
      }

      //Get flight booking history
      FetchHistory(token:any)
      {
       const httpOptions:Object = {
         headers:new HttpHeaders({
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${token}`,
         }),
       };
       return this.http.get(this.baseApiUrl+`bookinghistory`, httpOptions)
      }

      //Cancel ticket based on boarding id
      CancelTicketApi(token:any,bId:number)
      {
       const httpOptions:Object = {
         headers:new HttpHeaders({
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${token}`,
         }),
       };
       return this.http.post(this.baseApiUrl+`cancelTicket?bId=${bId}`,null, httpOptions)
      }
      //Add new Flight
      AddFlightApi(token:any,obj?:flightDtoo)
      {
       const httpOptions:Object = {
         headers:new HttpHeaders({
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${token}`,
         }),
       };
       return this.http.post(this.baseApiUrl+`Admin/addFlight?flight_ID=${obj?.flight_ID}&flight_Name=${obj?.flight_Name}&source=${obj?.source}&destination=${obj?.destination}&boarding_Time=${obj?.boarding_Time}&fare=${obj?.fare}`,null, httpOptions)
      }

  //Admin Login API
   loginAdminApi(request:loginDto)
   {
    return this.http.post(this.baseApiUrl+'Admin/adminLogin',request,{responseType: 'text'});
   }

   //Get All flight detail
   FetchAllFlightDetailsApi(token:any)
   {
    const httpOptions:Object = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
    };
    return this.http.get(this.baseApiUrl+'Admin/getAllFlights', httpOptions)
   }
   
   //Delete a flight
   DeleteFlightApi(token:any,id:number)
   {
    const httpOptions:Object = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
    };
    return this.http.get(this.baseApiUrl+`Admin/deleteFlight?id=${id}`, httpOptions)
   }

   //Update a Flight
   UpdateFlightApi(token:any,obj?:flightDtoo)
   {
    const httpOptions:Object = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }),
    };
    return this.http.post(this.baseApiUrl+`Admin/updateFlight?flight_ID=${obj?.flight_ID}&flight_Name=${obj?.flight_Name}&source=${obj?.source}&destination=${obj?.destination}&boarding_Time=${obj?.boarding_Time}&fare=${obj?.fare}`,null, httpOptions)
   }

}
