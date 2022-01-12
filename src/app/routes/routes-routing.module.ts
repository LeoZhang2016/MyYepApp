import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


// import {OnlineBuyingComponent} from "./online-buying/online-buying.component";


const routes: Routes = [
  // {path: '', redirectTo: 'event-online-buying', pathMatch: 'full'},
  // {path: '', component: OnlineBuyingComponent},

  {path:"", redirectTo:'home', pathMatch:'full'},

  {path: 'home',loadChildren:() => import('./landing/home/home.module').then(m => m.HomeModule) },

  {path:'melb-apart', loadChildren: () => import('./landing/melb-apart/melb-apart.module').then(m => m.MelbApartModule)},

  {path: 'melb-town', loadChildren: () => import('./landing/melb-town/melb-town.module').then(m => m.MelbTownModule)},

  {path: 'sydn-apart',loadChildren: () => import('./landing/sydn-apart/sydn-apart.module').then(m => m.SydnApartModule)},

  {path: 'sydn-town', loadChildren: () => import('./landing/sydn-town/sydn-town.module').then(m => m.SydnTownModule)},

  {path: 'brisb-apart', loadChildren: () => import('./landing/brisb-apart/brisb-apart.module').then(m => m.BrisbApartModule)},

  { path: "**", redirectTo: "home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {scrollPositionRestoration: 'top'}
  )]

})
export class RoutesRoutingModule {
}
