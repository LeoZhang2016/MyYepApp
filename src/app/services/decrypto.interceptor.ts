import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, every, tap, map, mergeMap } from 'rxjs/operators';
import { of, from, Observable } from 'rxjs';

import { CryptoService } from './crypto.service';
import { UserService } from './user.service';

@Injectable()
export class DecryptoInterceptor implements HttpInterceptor {
  // 不需要解密
  filterURI: Array<string> = [
    '/api/anon/environments',
    '/api/anon/projects/complex',
    '/api/anon/users/auth',
    '/api/anon/projects',
    '/assets/i18n/en.json',
    '/assets/i18n/zh.json',
    '/assets/json/postcodes.json',
    '/assets/json/language.json',
    '/download/lottery/file',
    '/youtube',
  ];

  constructor(private crypto: CryptoService, private user: UserService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const url = req.url;
    // console.log(url);

    let exec = true;
    for (const fURI of this.filterURI) {
      // if (url.indexOf('/api/') >= 0 && url.indexOf(fURI) >= 0) {
      //     exec = false;
      //     break;
      // }
      if (url.indexOf(fURI) >= 0) {
        exec = false;
        break;
      }
    }
    if (exec) {
      // console.log('dsfdsfdsfdsf');
      req = req.clone({
        responseType: 'text',
      });
      return this.decryptReponseBody(req, next);
    } else {
    }
    return next.handle(req);
  }

  private decryptReponseBody(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      mergeMap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // console.log('body:', event.body);
          if (event.body) {
            // console.log('event body .....');
            if (this.user.environments) {
              const cryptoKeyFromServer = this.user.environments[0].cryptoKey;
              const realKey = cryptoKeyFromServer.substring(
                8,
                cryptoKeyFromServer.length - 8
              );
              console.log(realKey);
              const deBody = this.crypto.decryptFromServer(event.body, realKey);
              // console.log('decrypt body:', deBody);
              // event = event.clone({
              //     body: JSON.parse(deBody)
              // });
              return of(
                event.clone({
                  body: JSON.parse(deBody),
                })
              );
            } else {
              // console.log('dont have enviroments....');
              return this.user.getEnvironments().pipe(
                map(() => {
                  const cryptoKeyFromServer =
                    this.user.environments[0].cryptoKey;

                  console.log(
                    'this.user.environments[0].cryptoKey : ',
                    cryptoKeyFromServer
                  );

                  const realKey = cryptoKeyFromServer.substring(
                    8,
                    cryptoKeyFromServer.length - 8
                  );
                  // console.log(realKey);
                  const deBody = this.crypto.decryptFromServer(
                    event.body,
                    realKey
                  );
                  // console.log('decrypt body:', deBody);
                  return event.clone({
                    body: JSON.parse(deBody),
                  });
                  // return event;
                })
              );
            }
          }
        } else {
          return of(event);
        }
        // return event;
      }),
      catchError((err) => {
        console.error(err);
        throw err;
      })
    );
  }
}
