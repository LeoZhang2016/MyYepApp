import { Component, OnInit } from '@angular/core';
import {Directive, HostListener} from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Meta, MetaDefinition,Title } from '@angular/platform-browser';
import { ContactUsComponent } from '../contact-us/contact-us.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  isReadMore:boolean = true;
  isReadMore4:boolean = true;
  isReadMore5:boolean = true;

  hide_itself_1:boolean = false;
  hide_itself_2:boolean = false;
  hide_itself_3:boolean = false;

  constructor(private router: Router, public dialog: MatDialog,private metaService: Meta,private titleService:Title) {
    this.addTag();
  }

  // [ngClass]="{'hide-itself': hide_itself}"

//   style="width: .72rem; height: .72rem; background:#FF7712;
//   display:flex; justify-content: center;align-items: center;
// ;"

addTag() {
  this.titleService.setTitle("Buy Off Plan Property | Discover Your Dream Home | YepHome!");
  this.metaService.addTag({name: 'description',content: 'Find and Buy Off The Plan Apartments, Townhouses and New and Land Packages. YepHome is Australia’s Leading Real Estate Site For Off The Plan Properties.'});
  this.metaService.addTag({name: 'keywords',content: 'off plan property'});
}

doHideCube_1(){
   console.log("0000")
  this.hide_itself_1 = !this.hide_itself_1;
}

mouse_enter_1(){
  // console.log("mouse entered .....");
  this.hide_itself_1 = true;
}

mouse_leave_1(){
  // console.log("mouse leave .....");
  this.hide_itself_1 = false;
}

mouse_enter_2(){
  // console.log("mouse entered .....");
  this.hide_itself_2 = true;
}

mouse_leave_2(){
  // console.log("mouse leave .....");
  this.hide_itself_2 = false;
}

mouse_enter_3(){
  // console.log("mouse entered .....");
  this.hide_itself_3 = true;
}

mouse_leave_3(){
  // console.log("mouse leave .....");
  this.hide_itself_3 = false;
}




doHideCube_2(){
  console.log("0000")
 this.hide_itself_2 = !this.hide_itself_2;
}

doHideCube_3(){
  console.log("0000")
 this.hide_itself_3 = !this.hide_itself_3;
}

  showText() {
    console.log("11111");
     this.isReadMore = !this.isReadMore
  }

  showText4() {
    console.log("4444");
     this.isReadMore4 = !this.isReadMore4
  }

  showText5() {
    console.log("5555");
     this.isReadMore5 = !this.isReadMore5
  }



  sydneyApart($event){
    //  console.log("333333");
     this.router.navigateByUrl("/sydn-apart");
  }

  sydneyTown($event){
    this.router.navigateByUrl("/sydn-town");
 }

 melApart($event){
  this.router.navigateByUrl("/melb-apart");

 }

  melTown($event){
    this.router.navigateByUrl("/melb-town");

 }


 brisApart($event){
  this.router.navigateByUrl("/brisb-apart");

}
contatcUs($event){
    // console.log("contact us ...");
    let dialogRef = this.dialog.open(ContactUsComponent,{
      width: '480px',
      height: '680px'
    });
}

donothing($event){

}

  ngOnInit(): void {
  }

  homeClick(){
    window.open('https://www.yephome.com.au/home');
  }

  projectClick(){
    window.open('https://www.yephome.com.au/map-display?page=1');
  }

  angentClick(){
    window.open('https://www.yephome.com.au/agents');
  }

  newsClick(){
    window.open('https://www.yephome.com.au/agents');
  }

  showRoomClick(){
    window.open('https://www.yephome.com.au/cloud');

  }

  joinAgentClick(){
    window.open('https://www.yephome.com.au/console/agent/auth/login');
  }

  apartClick(){
    window.open('https://www.yephome.com.au/map-display?page=1&type=3');
  }

  apartMelClick(){
    window.open('https://www.yephome.com.au/map-display?page=1&type=3&country=au&state=Victoria');

  }

  apartSynClick(){
    window.open('https://www.yephome.com.au/map-display?page=1&type=3&country=au&state=NSW');
  }

  apartBrisClick(){
    window.open('https://www.yephome.com.au/map-display?page=1&type=3&country=au&state=Queensland');
  }

  apartPerthClick(){
    window.open('https://www.yephome.com.au/map-display?type=3&page=1&country=au&state=Western%20Australia');
  }

  townClick(){
    window.open('https://www.yephome.com.au/map-display?page=1&type=2');
  }

  townMelClick(){
    window.open('https://www.yephome.com.au/map-display?page=1&type=2&country=au&state=Victoria');
  }

  townSynClick(){
    window.open('https://www.yephome.com.au/map-display?page=1&type=2&country=au&state=NSW');
  }

  townBrisClick(){
    window.open('https://www.yephome.com.au/map-display?page=1&type=2&country=au&state=Queensland');
  }

  townPerthClick(){
    window.open('https://www.yephome.com.au/map-display?page=1&type=2&country=au&state=Western%20Australia');
  }

  landClick(){
    window.open('https://www.yephome.com.au/map-display?type=4&page=1');
  }

  landMelClick(){
    window.open('https://www.yephome.com.au/map-display?page=1&type=4&country=au&state=Victoria');
  }

  landSydnClick(){
    window.open('https://www.yephome.com.au/map-display?page=1&type=4&country=au&state=NSW');
  }

  landBrisClick(){
     window.open('https://www.yephome.com.au/map-display?page=1&type=4&country=au&state=Queensland');
  }

  landPerthClick(){
     window.open('https://www.yephome.com.au/map-display?page=1&type=4&country=au&state=Western%20Australia');
  }

  registerNow(){
    window.open('https://www.yephome.com.au/map-display?page=1');
  }

  findOut(){
    window.open('https://www.yephome.com.au/map-display?page=1')
  }

}
