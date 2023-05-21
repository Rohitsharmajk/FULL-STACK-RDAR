import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FlightManagementService {

  baseApiUrl:string=environment.baseApiUrl;
  constructor(private http:HttpClient) {
    this.http.post(this.baseApiUrl+'/Account/register');
   }
}
