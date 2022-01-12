import {
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    Component, ElementRef,
    HostListener, OnChanges,
    OnInit, SimpleChanges,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {environment} from '@env/environment';
import {UserService} from './services/user.service';
import {
    ActivatedRoute, ActivationStart,
    NavigationCancel,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    Router
} from '@angular/router';
// import {SnackbarService} from './services/snackbar.service';
import {MatDialog} from '@angular/material/dialog';
// import smoothscroll from 'smoothscroll-polyfill';
// import {LoginDialogComponent} from '@shared/components/dialog/login-dialog/login-dialog.component';
// import {SignupDialogComponent} from '@shared/components/dialog/signup-dialog/signup-dialog.component';
// import {LiveChatService} from './services/livechat.service';
import {ToastrService} from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from './services/language.service';
import {HttpService} from './services/http.service';
// import {FooterService} from './services/footer.service';
// import {AreaService} from './services/area.service';
import {MatMenu} from '@angular/material/menu';
// import {AgentService} from './services/agent.service';

import { Title, Meta } from '@angular/platform-browser';

import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-core',
    templateUrl: './core.component.html',
    styleUrls: ['./core.component.scss'],
})
export class CoreComponent implements OnInit, AfterContentChecked, AfterViewInit, OnChanges {

    @ViewChild('userMenu', {static: false}) private userMenu: MatMenu;
    @ViewChild('languageMenu', {static: false}) private languageMenu: MatMenu;

    SERVER_URL = environment.SERVER_URL;
    lang: any;
    user: any;
    any;
    url = environment.ADMIN_URL;
    routeLoading: boolean;
    showNavbar: boolean;

    isChatOpen: boolean;
    agentId: any;

    isShow: boolean;
    topPosToStartShowing = 1;

    showFooter: boolean;
    smallFooter: boolean;

    // headerClass: any;

    userLightNavbar: boolean;
    useTopLightNavbar: boolean;

    darkNavbarUrlArray = [
        // '/home',
        '/buyer-guide',
        '/news',
        // '/event',
        // '/agents',
        '/cloud',
        '/map-display',
        '/user-center',
        '/user-center/profile',
        '/user-center/voucher',
        '/user-center/like',
        '/user-center/history',
        '/user-center/password',
        '/user-center/prize',
        '/privacy',
        '/terms',
        '/email',
        '/auth'

    ];

    // @HostListener('window:scroll')
    // checkScroll() {
    //     const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    //     if (scrollPosition >= this.topPosToStartShowing) {
    //         this.userLightNavbar = false;
    //     } else {
    //         const currentUrl = this.router.url;
    //         if (currentUrl.indexOf('home') >= 0 || currentUrl.indexOf('event') >= 0 || currentUrl.indexOf('agents') >= 0) {
    //             this.userLightNavbar = true;
    //             this.useTopLightNavbar = true;
    //         }
    //     }
    // }



    constructor(public userService: UserService,
                public httpService: HttpService,
                private router: Router,
                private route: ActivatedRoute,
                private dialog: MatDialog,
                public translate: TranslateService,
                public languageService: LanguageService,
                // private footerService: FooterService,
                // private areaService: AreaService,
                // public agentService: AgentService,
                private toastrService: ToastrService,

                private activatedRoute: ActivatedRoute,
                private titleService: Title,
                private metaService: Meta
                ) {
        translate.addLangs(['en', 'zh']);
        if (localStorage.getItem('lang') === 'en') {
            const userDefaultLang = 'en';
            translate.setDefaultLang(userDefaultLang);
            this.lang = 'en';
        } else if (localStorage.getItem('lang') === 'zh') {
            const userDefaultLang = 'zh';
            translate.setDefaultLang(userDefaultLang);
            this.lang = 'zh';
        } else {
            const browserLang = this.translate.getBrowserLang();
            const userDefaultLang = 'en';
            this.switchLang(browserLang.match(/zh|en/) ? browserLang : 'en');
            translate.setDefaultLang(browserLang.match(/zh|en/) ? browserLang : 'en');
            this.lang = browserLang.match(/zh|en/) ? browserLang : 'en';
        }
        this.openCookieDialog();
        this.showFooter = true;
        this.isChatOpen = false;
        this.routeLoading = false;
        // smoothscroll.polyfill();
        this.user = this.userService.user;
        this.router.events.subscribe(event => {
            // console.log(event);
            if (event instanceof ActivationStart) {
                console.log(event.snapshot.data);
            }
            if (event instanceof NavigationStart) {
                this.routeLoading = true;
            }
            if (event instanceof NavigationEnd) {
                // console.log(this.route.snapshot);
                this.routeLoading = false;
                const url = this.router.url;
                if (this.darkNavbarUrlArray.indexOf(url) >= 0 || (url.indexOf('/project') >= 0) || (url.indexOf('/house-land-package') >= 0) || (url.indexOf('/news') >= 0) || (url.indexOf('/map-display') >= 0) || (url.indexOf('/email') >= 0) || (url.indexOf('/forget-password') >= 0)) {
                    this.showNavbar = true;
                    this.userLightNavbar = false;
                    this.useTopLightNavbar = false;

                } else {
                    this.showNavbar = false;
                    this.userLightNavbar = true;
                    this.useTopLightNavbar = true;
                }
                this.showNavbar = true;

                if (url.indexOf('home') >= 0 || url.indexOf('event') >= 0 || url.indexOf('agents') >= 0) {
                    this.showNavbar = true;

                }

                if (url.indexOf('event') >= 0 || url.indexOf('agents') >= 0) {
                    this.useTopLightNavbar = true;
                } else {
                    this.useTopLightNavbar = false;
                }


                if (url.indexOf('reserve') >= 0 || url.indexOf('map-display') >= 0 || url.indexOf('welcome') >= 0 || url.indexOf('become-an-agent') >= 0 || url.indexOf('page-not-found') >= 0 || url.indexOf('internal-error') >= 0) {
                    this.showFooter = false;
                    // console.log(this.showFooter);
                } else {
                    this.showFooter = true;
                }

                if (url.indexOf('map-display') >= 0) {
                    this.smallFooter = true;
                } else {
                    this.smallFooter = false;
                }
            }

            if (event instanceof NavigationError || event instanceof NavigationCancel) {
                this.routeLoading = false;
            }


        });
    }

    ngOnInit() {
        this.userLightNavbar = true;

        // this.userService.getUserInfoWithRememberMe().subscribe((r: any) => {
        //     console.log(r);
        //     if (r.code === 0) {
        //         this.userService.reLogin().subscribe((res: any) => {
        //                 if (res.code === 0) {
        //                     localStorage.removeItem('user');
        //                 }
        //             },
        //             error => {
        //                 localStorage.removeItem('user');
        //             });
        //         // }
        //     }
        // });

        // this.router.events.pipe(
        //   filter(event => event instanceof NavigationEnd),
        // ).subscribe(()=>{

        //   var rt = this.getChild(this.activatedRoute);

        //   rt.data.subscribe(data=>{
        //      this.titleService.setTitle(data.title)

        //      if(data.description){
        //         this.metaService.updateTag({name:'description',content:data.description})
        //      }else {
        //        this.metaService.updateTag({name:'description',content:data.description})
        //      }

        //      if(data.keywords){
        //       this.metaService.updateTag({name:'keywords',content:data.keywords})
        //      }else {
        //       this.metaService.updateTag({name:'keywords',content:data.keywords})
        //     }

        //     if(data.comments){
        //       this.metaService.updateTag({name:'comments',content:data.comments})
        //      }else {
        //       this.metaService.updateTag({name:'comments',content:data.comments})
        //     }

        //     if(data.title){
        //       this.metaService.updateTag({name:'title',content:data.title})
        //      }else {
        //       this.metaService.updateTag({name:'title',content:data.title})
        //     }
        //   })

        // })
    }

    // getChild(activatedRoute: ActivatedRoute) {
    //   if (activatedRoute.firstChild) {
    //     return this.getChild(activatedRoute.firstChild);
    //   } else {
    //     return activatedRoute;
    //   }
    // }

    // openLoginDialog() {
    //     this.userService.openLoginDialog();
    // }

    // logout() {
    //     this.userService.logout().subscribe((data: any) => {
    //         if (data.code === 1) {
    //             this.toastrService.success((this.lang === 'zh' ? '您已退出登录' : 'You have logged out.'), '', {
    //                 positionClass: 'toast-top-center'
    //             });
    //             if (this.router.url.indexOf('/user-center') >= 0) {
    //                 this.router.navigateByUrl('/home');
    //             }
    //         }
    //     });
    // }

    ngAfterContentChecked(): void {
    }

    ngAfterViewInit(): void {
    }


    ngOnChanges(changes: SimpleChanges) {
    }

    setUserMenuPanelStyle() {
        this.userMenu.panelClass = 'customize-user-menu-panel';
    }

    setLanguageMenuPanelStyle() {
        this.languageMenu.panelClass = 'customize-user-menu-panel';
    }


    switchLang(lang: string) {
        this.translate.use(lang);
        localStorage.setItem('lang', lang);
        this.languageService.changeLang(lang);
        // console.log(this.translate.currentLang);
        this.lang = lang;
    }

    openEventDialog() {
        // const b = localStorage.getItem('_b');
        // if (b === '1') {
        // } else if (b === '0') {
        //     const dialogRef = this.dialog.open(EventDialogComponent, {
        //         // width: '640px',
        //         backdropClass: 'darkBackdrop',
        //         panelClass: 'darkDialogPanel'
        //     });
        //     dialogRef.afterClosed().subscribe(() => {
        //         localStorage.setItem('_b', '1');
        //     });
        // } else {
        //     const dialogRef = this.dialog.open(EventDialogComponent, {
        //         // width: '640px',
        //         backdropClass: 'darkBackdrop',
        //         panelClass: 'darkDialogPanel'
        //     });
        //     dialogRef.afterClosed().subscribe(() => {
        //         localStorage.setItem('_b', '1');
        //     });
        // }
    }

    openCookieDialog() {
        // const c = localStorage.getItem('_c');
        // if (c === '1') {
        // } else if (c === '0') {
        //     const dialogRef = this.dialog.open(CookieDialogComponent, {
        //         // width: '640px',
        //         backdropClass: 'darkBackdrop2',
        //         panelClass: 'sharpDialogPanel',
        //         disableClose: true
        //     });
        //     dialogRef.afterClosed().subscribe(() => {
        //         localStorage.setItem('_c', '1');
        //     });
        // } else {
        //     const dialogRef = this.dialog.open(CookieDialogComponent, {
        //         // width: '640px',
        //         backdropClass: 'darkBackdrop2',
        //         panelClass: 'sharpDialogPanel',
        //         disableClose: true
        //     });
        //     dialogRef.afterClosed().subscribe(() => {
        //         localStorage.setItem('_c', '1');
        //     });
        // }
    }

    openNewTab(url, sidenav?) {
      if (sidenav) {
        sidenav.toggle();
      }
      window.open(`${this.SERVER_URL}${url}`);
    }


    goHome(){
      window.open('https://www.yephome.com.au/','_self');
    }

}
