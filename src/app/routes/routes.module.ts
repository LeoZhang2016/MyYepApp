import {RoutesRoutingModule} from './routes-routing.module';
import {NgModule} from '@angular/core';
// import {SharedModule} from '@shared/shared.module';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {TranslateModule} from '@ngx-translate/core';

import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {SwiperModule} from "swiper/angular";
import { ContactUsComponent } from './landing/contact-us/contact-us.component';


@NgModule({
  declarations: [
    // OnlineBuyingComponent,
    ContactUsComponent],

  imports: [
    SharedModule,
    RoutesRoutingModule,
    RouterModule,
    SwiperModule,
    FormsModule,
    MatTooltipModule,
    MatButtonToggleModule,
    TranslateModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000
    })
  ],
  providers: [],
  entryComponents: [],
  exports: [
  ]
})
export class RoutesModule {

}

