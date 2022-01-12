import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SydnApartRoutingModule } from './sydn-apart-routing.module';
import { SydnApartComponent } from './sydn-apart.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    SydnApartComponent
  ],
  imports: [
    CommonModule,
    SydnApartRoutingModule,
    FlexLayoutModule
  ]
})
export class SydnApartModule { }
