import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent, HttpHeaders} from '@angular/common/http';
import {catchError, every, tap, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {CryptoService} from '../services/crypto.service';
import {UserService} from '../services/user.service';


import {from, Observable} from 'rxjs';

@Injectable()
export class CryptoInterceptor implements HttpInterceptor {

    // 不需要解密
    // filterURI: Array<string> = [
    //     '/customer/api/anon/environments',
    //     '/customer/api/anon/projects/complex',
    //     '/customer/api/anon/users/auth',
    //     '/customer/api/anon/projects',
    //     '/assets/i18n/en.json',
    //     '/assets/i18n/zh.json',
    //     '/assets/json/postcodes.json',
    //     '/assets/json/language.json',
    //     '/download/lottery/file',
    //     '/youtube'
    // ];

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
        '/youtube'
    ];

    constructor(private crypto: CryptoService, private user: UserService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = req.url;
        let exec = true;
        for (const fURI of this.filterURI) {
            if (url.indexOf(fURI) >= 0) {
                exec = false;
                break;
            }
        }
        if (exec) {
            req = req.clone({
                responseType: 'text'
            });
            return this.decryptReponseBody(req, next);
        } else {
        }
        return next.handle(req);
    }

    private decryptReponseBody(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next
            .handle(req)
            .pipe(
                mergeMap((event: HttpEvent<any>) => {
                        if (event instanceof HttpResponse) {
                            if (event.body) {
                                if (this.user.environments) {
                                    console.log(this.user.environments);
                                    const cryptoKeyFromServer = this.user.environments[0].cryptoKey;
                                    const realKey = cryptoKeyFromServer.substring(8, cryptoKeyFromServer.length - 8);
                                    console.log(realKey);
                                    const deBody = this.crypto.decryptFromServer(event.body, realKey);
                                    return of(event.clone({
                                        body: JSON.parse(deBody)
                                    }));
                                } else {
                                    return this.user.getEnvironments().pipe(
                                        map(() => {
                                            const cryptoKeyFromServer = this.user.environments[0].cryptoKey;
                                            const realKey = cryptoKeyFromServer.substring(8, cryptoKeyFromServer.length - 8);
                                            const deBody = this.crypto.decryptFromServer(event.body, realKey);
                                            return event.clone({
                                                body: JSON.parse(deBody)
                                            });
                                        }));
                                }
                            }
                        } else {
                            return of(event);
                        }
                    }
                ),
                catchError(err => {
                    console.error(err);
                    throw err;
                })
            );
    }
}
