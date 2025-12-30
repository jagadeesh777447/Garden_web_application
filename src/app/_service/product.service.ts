import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private reloadFooterSubject = new BehaviorSubject<boolean>(false);
  public reloadFooter$ = this.reloadFooterSubject.asObservable();
  public reloadFooter(): void {
    this.reloadFooterSubject.next(true);
  }
  baseUrl = environment.apiUrl;
  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}
  constructor(private http: HttpClient) { }

  getProductList(page:any,category:any){
    return this.http.get(this.baseUrl + 'api/Public_Products/getProductsList?page='+ page +'&category=' + category).pipe(
      map(response=>{
        return response
      })
    )
  }
  getCategoryList(){
    return this.http.get(this.baseUrl + 'api/Public_Products/getAllProductCategories?isActive=true').pipe(
      map(response =>{
        return response
      })
    )
  }
  getProductByName(title: string){
    return this.http.get(this.baseUrl + 'api/Public_Products/getProductByName?productTitle='+ title).pipe(
      map(response =>{ 
        return response
      })
    )
  }
  productEnquiry(data: any){
    let body = JSON.stringify(data).toString();
    // const headers = new HttpHeaders();
    // headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.baseUrl + 'api/Public_Products/ProductInnerPage',body, this.headers ).pipe(
      map(response =>{ 
        return response
      })
    )
  }
}
