import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {UserService} from '../services/user.service';
// import {ConnectionService} from 'ng-connection-service';
import {ToastrService} from 'ngx-toastr';
import {LanguageService} from '../services/language.service';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
    whiteList: Array<string> = [
        // '/api/auth/stripe/create-product-address-subscription',
        // '/api/auth/stripe/add-card',
        // '/api/anon/users/login'
    ];

    noInternetConnection: boolean;
    isConnected = true;
    lang: any;

    constructor(private languageService: LanguageService, private router: Router, private userService: UserService, private toastrService: ToastrService) {
        // this.connectionService.monitor().subscribe(isConnected => {
        //     this.isConnected = isConnected;
        //     if (this.isConnected) {
        //         this.noInternetConnection = false;
        //         this.toastrService.success(this.lang === 'zh' ? '我们检测到您的网络连接正常' : 'Your internet connection is good');
        //
        //     } else {
        //         this.noInternetConnection = true;
        //         // this.router.navigateByUrl('/no-internet-error').then(() => {
        //         //     this.toastrService.error(this.lang === 'zh' ? '我们检测到您的网络不佳' : 'It looks like your internet connection is slow');
        //         // });
        //         this.toastrService.error(this.lang === 'zh' ? '我们检测到您的网络不佳' : 'It looks like your internet connection is slow or lost');
        //
        //     }
        // });

        const lang = localStorage.getItem('lang');
        this.lang = lang ? lang : 'en';
        this.languageService.langSubject.subscribe(l => {
            this.lang = l;
        });
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log(req);
        // for (const url of this.whiteList) {
        if (req.url.indexOf('/api/anon/users/login') < 0) {
            return next.handle(req).pipe(
                catchError((httpErrorResponse: HttpErrorResponse) => {
                    const data = {
                        reason: httpErrorResponse.statusText ? httpErrorResponse.statusText : httpErrorResponse.error,
                        status: httpErrorResponse.status,
                        error: httpErrorResponse.error
                    };
                    if (data.status === 500 || data.status === 401 || data.status === 400) {
                        this.router.navigateByUrl('/internal-error');
                    }
                    // if (data.status === 0 && !navigator.onLine) {
                    //     this.router.navigateByUrl('/error');
                    // }
                    if (data.status === 404) {
                        // this.userService.isEmailOrPhoneTaken = true;
                        // this.router.navigateByUrl('/page-not-found');

                    }
                    throw httpErrorResponse;

                })
            );
        }
        return next.handle(req);


    }
}
