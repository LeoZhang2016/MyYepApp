import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {MatCheckboxModule} from "@angular/material/checkbox";

import {MatButtonModule} from "@angular/material/button";
// import { OrderResultComponent } from './components/dialog/order-result/order-result.component';


@NgModule({
    declarations: [

    ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,

    MatCheckboxModule,
    MatButtonModule,
  ],
    entryComponents: [


    ],
    exports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})

export class SharedModule {
}
