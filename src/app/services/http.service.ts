import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient) {}

  // apiUrl = 'http://49.255.76.2/customer/api/anon/environments';
  apiUrl = 'http://49.255.76.2/customer/api';

  getAllEnvironments() {
    // console.log('httpService is work.......');
    return this.http.get(`${this.apiUrl}/anon/environments`);
  }
}
