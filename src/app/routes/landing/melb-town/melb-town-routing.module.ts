import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MelbTownComponent } from './melb-town.component';

const routes: Routes = [{path: "", component:MelbTownComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MelbTownRoutingModule { }
