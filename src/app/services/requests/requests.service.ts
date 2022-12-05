import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private apiURL : string;

  constructor(private http : HttpClient) {
      this.apiURL = 'http://localhost:8000/api/';
  }

  public get(url: string, body?: any){
      return this.http.get(this.apiURL.concat(url), body);
  }

  public post(url: string, body?: any){
      return this.http.post(this.apiURL.concat(url), body);
  }

  public put(url: string, body?: any){
      return this.http.put(this.apiURL.concat(url), body);
  }

  public delete(url: string, body?: any){
      return this.http.delete(this.apiURL.concat(url), body);
  }

}
