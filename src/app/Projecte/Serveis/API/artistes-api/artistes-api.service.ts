import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistesAPIService {

  constructor(private http: HttpClient) { };

  getArtistes(): Observable<any> {
    return this.http.get("https://api.artic.edu/api/v1/artists");
  }
}
