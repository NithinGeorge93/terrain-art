import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) { }
  public getNews(){
    return this.http.get<any>(`https://test.nmxlabs.in/api/gallery/all`);
  }
}