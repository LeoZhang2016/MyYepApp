import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {Observable, of, Subject} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
// import {LoginDialogComponent} from '@shared/components/dialog/login-dialog/login-dialog.component';
// import {SignupDialogComponent} from '@shared/components/dialog/signup-dialog/signup-dialog.component';
// import {EmailVerificationComponent} from '@shared/components/dialog/email-verification/email-verification.component';
// import {ForgetPasswordComponent} from '@shared/components/dialog/forget-password/forget-password.component';
// import {SocialAuthService} from 'angularx-social-login';

@Injectable({
    providedIn: 'root',
})

export class UserService {
    public environments: any;
    public user: any;
    public isEmailOrPhoneTaken = false;
    public isPaymentSuccessful: boolean;
    public reloginSubject: Subject<any>;

    constructor(private httpService: HttpService, private dialog: MatDialog,
      //  private authService: SocialAuthService
       ) {
        this.reloginSubject = new Subject<any>();
    }

    public login(username, password, verifyCode, isRememberMe) {
        return this.httpService.login(username, password, verifyCode, isRememberMe).pipe(
            tap((res: any) => {
                if (res.code === 1) {
                    console.log('401?');
                    this.httpService.getUserProjectLike().pipe(
                        map((r: any) => {
                            console.log(r);
                            if (r.code === 1) {}
                            this.user = res.data;
                            this.user.email = this.getEmailFromContacts(res.data.contacts);
                            this.user.phoneNumber = this.getMobileFromContacts(res.data.contacts);
                            if (r.code === 1) {
                                this.user.likeProjects = r.data;
                            } else {
                                this.user.likeProjects = [];
                            }
                            this.reloginSubject.next(this.user);
                            localStorage.setItem('user', JSON.stringify(this.user));
                        })
                    ).subscribe();
                }
            })
        );
    }


    get currentUser(): Observable<any> {
        if (this.user) {
            return of(this.user);
        } else {

            // this.reloginSubject
        }
    }


    public getEnvironments() {
        return this.httpService.getAllEnvironments().pipe(
            map((res: any) => {
                this.environments = res.data;
                return this.environments;

            })
        );
    }

    // public logout() {
    //     this.user = null;
    //     // localStorage.removeItem('c_yhsessionId');
    //     localStorage.removeItem('user');
    //     // console.log(this.authService.authState);
    //     this.authService.authState.subscribe((user) => {
    //         // console.log(user);
    //         if (user) {
    //             this.authService.signOut();
    //         }
    //     });
    //     return this.httpService.logout();

    // }

    // public reLogin() {
    //     return this.httpService.reLogin().pipe(
    //         tap((res: any) => {
    //             if (res.code === 1) {
    //                 console.log(res);
    //                 this.httpService.getUserProjectLike().pipe(
    //                     map((r: any) => {
    //                         console.log(r);
    //                         if (r.code === 1) {}
    //                         this.user = res.data;
    //                         this.user.email = this.getEmailFromContacts(res.data.contacts);
    //                         this.user.phoneNumber = this.getMobileFromContacts(res.data.contacts);
    //                         if (r.code === 1) {
    //                             this.user.likeProjects = r.data;
    //                         } else {
    //                             this.user.likeProjects = [];
    //                         }
    //                         this.reloginSubject.next(this.user);
    //                         localStorage.setItem('user', JSON.stringify(this.user));
    //                     })
    //                 ).subscribe();
    //             }
    //         })
    //     );
    // }

    // public getUserInfoWithRememberMe() {
    //     return this.httpService.getUserInfoByRememberMe().pipe(
    //         tap((res: any) => {
    //             console.log(res);
    //             if (res.code === 1) {
    //                 this.httpService.getUserProjectLike().pipe(
    //                     tap((r: any) => {
    //                         console.log(r);
    //                         this.user = res.data;
    //                         this.user.email = this.getEmailFromContacts(res.data.contacts);
    //                         this.user.phoneNumber = this.getMobileFromContacts(res.data.contacts);
    //                         if (r.code === 1) {
    //                             this.user.likeProjects = r.data;
    //                         } else {
    //                             this.user.likeProjects = [];
    //                         }
    //                         this.reloginSubject.next(this.user);
    //                         localStorage.setItem('user', JSON.stringify(this.user));
    //                     })
    //                 ).subscribe();
    //             }
    //         }
    //     ));
    // }

    clear() {
        this.environments = null;
    }

    // openLoginDialog(reload?: boolean) {
    //     const dialogRef = this.dialog.open(LoginDialogComponent, {
    //         width: '400px',
    //         panelClass: 'login-dialog',
    //         hasBackdrop: true
    //     });

    //     dialogRef.afterClosed().subscribe((r: any) => {
    //         if (reload && r && r.code === 1) {
    //             location.reload();
    //         }
    //     });

    // }

    // openRegisterDialog() {
    //     const dialogRef = this.dialog.open(SignupDialogComponent, {
    //         width: '400px',
    //         panelClass: 'register-dialog',
    //         hasBackdrop: true
    //     });
    // }

    // openEmailVerification(email, code) {
    //     const dialogRef = this.dialog.open(EmailVerificationComponent, {
    //         minWidth: '300px',
    //         width: '80%',
    //         maxWidth: '500px',
    //         data: {
    //             email,
    //             code
    //         }
    //     });

    // }

    // openForgetPassword() {
    //     const dialogRef = this.dialog.open(ForgetPasswordComponent, {
    //         width: '400px',
    //         panelClass: 'forget-password-dialog',
    //         hasBackdrop: true
    //     });

    // }

    openVoucherDialog() {
        // const dialogRef = this.dialog.open(VoucherDialogComponent, {
        //     minWidth: '250px',
        //     width: '90%',
        //     maxWidth: '400px',
        //     backdropClass: 'darkBackdrop',
        //     // data: {
        //     //     email
        //     // }
        // });
    }

    getEmailFromContacts(contacts?) {
        if (contacts) {
            const email = contacts.filter((c: any) => c.contactItem.id === 1);
            // return the email of the user
            return email[0] ? email[0].content : '';
        } else {
            return null;
        }
    }

    getMobileFromContacts(contacts?) {
        if (contacts) {
            const phoneNumber = contacts.filter((c: any) => c.contactItem.id === 2);
            // return the mobile number of the user
            return phoneNumber[0] ? phoneNumber[0].content : '';
        } else {
            return '';
        }

    }


}
