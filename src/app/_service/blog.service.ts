import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
 baseUrl = environment.apiUrl
  constructor(private http: HttpClient) { }
  
  getBlogdata(page: any,category: any,archive: any){
    return this.http.get(this.baseUrl + 'api/Blog/getPublicBlogList?page=' + page + '&category=' + category + '&archive=' + archive  ).pipe(
      map(response=>{
        return response;
      })
    )
  }

  getBlogCategory(isActive: any){
    return this.http.get(this.baseUrl + 'api/Blog/getPublicBlogCategory?isActive=' + isActive).pipe(
      map(response=>{
        return response;
      })
    )
  }

  getBlogDetails(title: any){
    return this.http.get(this.baseUrl + 'api/Blog/getPublicBlogDetails?blogTilte='+ title).pipe(
      map(response=>{
        return response;
      })
    )
  }
 
}
