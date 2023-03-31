import { Injectable, Injector } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiFactoryService {

  constructor( private injector: Injector) { }

  httpService = this.injector.get(ApiService);

  getData(url): Observable<any> {

    return this.httpService.getCall(url);
  }

  postData(url, data): Observable<any> {

    return this.httpService.postCall(url, data);
  }

  putData(url, data): Observable<any> {

    return this.httpService.putCall(url, data);
  }
  
  deleteData(url): Observable<any> {

    return this.httpService.deleteCall(url);
  }
}
