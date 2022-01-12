import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreComponent} from './core.component';
// import { RoutesModule } from 'app/routes/routing.module';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {UserService} from './services/user.service';
import {TranslateModule} from '@ngx-translate/core';
import {_MatMenuDirectivesModule, MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";


@NgModule({
    declarations: [CoreComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    TranslateModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,

  ],
    exports: [CoreComponent],
    providers: []
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule has already been loaded');
        }
    }

    goHome(){
      window.open('https://www.yephome.com.au/');
    }
}
