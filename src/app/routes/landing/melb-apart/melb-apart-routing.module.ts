import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MelbApartComponent } from './melb-apart.component';

const routes: Routes = [{path:"",component:MelbApartComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MelbApartRoutingModule { }
