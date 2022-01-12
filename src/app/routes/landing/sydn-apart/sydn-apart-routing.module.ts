import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SydnApartComponent } from './sydn-apart.component';

const routes: Routes = [{path: "", component:SydnApartComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SydnApartRoutingModule { }
