import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrisbApartRoutingModule } from './brisb-apart-routing.module';
import { BrisbApartComponent } from './brisb-apart.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    BrisbApartComponent
  ],
  imports: [
    CommonModule,
    BrisbApartRoutingModule,
    FlexLayoutModule
  ]
})
export class BrisbApartModule { }
