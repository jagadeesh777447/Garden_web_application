import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  baseUrl = environment.apiUrl;
  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}
  constructor(private http: HttpClient) { }

  getContent(){
    return this.http.get(this.baseUrl + 'api/PublicHome/GetSettingsData').pipe(
      map(response=>{
        return response
      })
    )
  }

  contactform(model: any){
    let body = JSON.stringify(model)
    return this.http.post(this.baseUrl + 'api/Public_Products/saveEnquiryForm',body, this.headers).pipe(
      map(response=>{
        return response
      })
    )
  }
}
