import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAlbumImages(){
    return this.http.get(this.baseUrl + 'api/Public_Gallery/getAlbums').pipe(
      map(response=>{
        return response
      })
    )
  }
}
