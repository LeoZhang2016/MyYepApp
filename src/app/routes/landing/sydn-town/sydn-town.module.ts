import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SydnTownRoutingModule } from './sydn-town-routing.module';
import { SydnTownComponent } from './sydn-town.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    SydnTownComponent
  ],
  imports: [
    CommonModule,
    SydnTownRoutingModule,
    FlexLayoutModule
  ]
})
export class SydnTownModule { }
