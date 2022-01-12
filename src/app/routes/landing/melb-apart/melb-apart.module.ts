import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MelbApartRoutingModule } from './melb-apart-routing.module';
import { MelbApartComponent } from './melb-apart.component';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    MelbApartComponent
  ],
  imports: [
    CommonModule,
    MelbApartRoutingModule,
    FlexLayoutModule
  ]
})
export class MelbApartModule { }
