import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root',
})
export class EventSourceService {
  // http://49.255.76.2/customer/api/anon/operator/type?type=property-event

  // root: string = 'http://49.255.76.2/api/anon/environments';
  root: string = 'http://49.255.76.2/customer/api/anon/environments';
  // root1:string ="http://49.255.76.2/customer/api/anon/operator/type?type=property-event";

  root1: string =
    'http://49.255.76.2/customer/api/anon/operator/type?type=property-event';

  constructor(private http: HttpClient) {}

  environments: any;

  async queryEventProperty() {
    // let api="http://a.itying.com/api/productlist";
    // let api = this.root;
    let api = this.root1;

    this.http.get(api).subscribe((res: any) => {
      console.log(res);
      // console.log(res.data[0].cryptoKey);
      // console.log(res.data[0].cryptoKey);
      // this.environments = res;

      // this.environments = res;
      // console.log('this.environments : ', this.environments);
    });
  }

  async queryEventJsonpProperty() {
    // let api="http://a.itying.com/api/productlist";

    let api = 'http://49.255.76.2/api/anon/environments';

    // /api/anon/projects/{id}

    this.http.jsonp(api, 'callback').subscribe((response) => {
      console.log(response);
    });
  }
}
