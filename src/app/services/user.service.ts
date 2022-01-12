import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  root: string = 'http://49.255.76.2/customer/api/anon/environments';

  root1: string =
    'http://49.255.76.2/customer/api/anon/operator/type?type=property-event';

  root2: string = 'http://49.255.76.2/customer/api/anon/order-form/order-number/'
  root3: string = 'http://49.255.76.2/api/anon/order-form/order-number/'
  environments: any;

  constructor(private http: HttpClient, public httpService: HttpService) {}

  // async getEnviroment() {
  //   this.environments = await this.queryEventProperty();
  //   console.log('getEnviroment of this.enviroments: ', this.environments);
  //   return this.environments;
  // }

  public getEnvironments() {
    return this.httpService.getAllEnvironments().pipe(
      map((res: any) => {
        this.environments = res.data;
        console.log('Getenvironments: ', this.environments);
        return this.environments;
      })
    );
  }

  // async queryEventProperty() {
  //   let api = this.root;

  //   await this.http.get(api).subscribe((res: any) => {
  //     return res;
  //     // this.environments = res;
  //     // console.log('userService this.environments : ', this.environments);
  //   });
  // }

  queryEventProperty(): Observable<any> {
    let api = this.root1;

    // await this.http.get(api).subscribe((res: any) => {
    //   // console.log(res.data);

    // });
    // console.log(typeof this.http.get(api));
    return this.http.get(api);
  }

  queryOrder(order:number):Observable<any>{
      const result =  this.http.get(this.root2+`${order}`);
      // console.log(typeof `${order}`);
      // console.log(typeof order);
      // console.log(result);
      return result;
  }
}
