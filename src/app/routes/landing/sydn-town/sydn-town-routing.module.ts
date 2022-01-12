import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SydnTownComponent } from './sydn-town.component';

const routes: Routes = [{path:"",component:SydnTownComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SydnTownRoutingModule { }
