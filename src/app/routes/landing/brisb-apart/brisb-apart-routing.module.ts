import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrisbApartComponent } from './brisb-apart.component';

const routes: Routes = [{path: '',component:BrisbApartComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrisbApartRoutingModule { }
