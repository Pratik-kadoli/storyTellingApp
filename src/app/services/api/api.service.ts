import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //GET
  public getCall(url) {

    return this.http.get(url);
  }
  //POST
  public postCall(url, data) {

    return this.http.post(url, data)
  }
  //PUT

  public putCall(url, data) {

    return this.http.put(url, data);
  }

  public deleteCall(url) {

    return this.http.delete(url);
  }
}
