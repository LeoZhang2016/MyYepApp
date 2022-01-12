import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MelbTownRoutingModule } from './melb-town-routing.module';
import { MelbTownComponent } from './melb-town.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    MelbTownComponent
  ],
  imports: [
    CommonModule,
    MelbTownRoutingModule,
    FlexLayoutModule
  ]
})
export class MelbTownModule { }
