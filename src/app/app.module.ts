import { BrowserModule,Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {DefaultInterceptor} from './core/interceptors/default.interceptor';
import {CryptoInterceptor} from './core/interceptors/decrypt-interceptor';
import {GlobalInterceptor} from './core/interceptors/global.interceptor';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  HttpClientModule,
  HttpClientJsonpModule,
  HTTP_INTERCEPTORS, HttpClient,
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {CoreModule} from './core/core.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ToastrModule} from "ngx-toastr";
import {RoutesModule} from './routes/routes.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    // SocialLoginModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RoutesModule,
    // HttpClientJsonpModule,
    CoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    // ToastrModule.forRoot({
    //   maxOpened: 1,
    //   autoDismiss: true
    // })
    // ToastrModule.forRoot({
    //   timeOut: 1000
    // })
  ],
  providers: [
    Meta,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DefaultInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CryptoInterceptor,
      multi: true

    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalInterceptor,
      multi: true
    },
    // {
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: false,
    //     providers: [
    //       {
    //         id: GoogleLoginProvider.PROVIDER_ID,
    //         provider: new GoogleLoginProvider(
    //           '439279444365-fncem0gjd7v9e1fg2ptv6pqhmfo3q8ma.apps.googleusercontent.com'
    //         )
    //       }
    //       // {
    //       //     id: FacebookLoginProvider.PROVIDER_ID,
    //       //     provider: new FacebookLoginProvider('clientId')
    //       // }
    //     ]
    //   } as SocialAuthServiceConfig,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
