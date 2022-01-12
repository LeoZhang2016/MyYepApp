import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta,Title } from '@angular/platform-browser';
import { ContactUsComponent } from '../contact-us/contact-us.component';


@Component({
  selector: 'app-sydn-apart',
  templateUrl: './sydn-apart.component.html',
  styleUrls: ['./sydn-apart.component.scss']
})
export class SydnApartComponent implements OnInit {

  constructor(public dialog: MatDialog,private metaService: Meta,private titleService:Title) {
    this.addTag();
  }

  addTag() {
    this.titleService.setTitle("New Off The Plan Apartments in Sydney | Apartments for Sale");
    this.metaService.addTag({name: 'description',content: 'Find and Buy Off The Plan Apartments in Sydney. YepHome is Australia’s Leading Real Estate Site For Off The Plan Apartments in Sydney. View our Listings Now.'});
    this.metaService.addTag({name: 'keywords',content: 'off the plan apartments sydney'});
   }

  ngOnInit() {
  }
  findSydOut(){
    window.open("https://www.yephome.com.au/map-display?page=1&type=3&country=au&state=NSW");
  }

  contatcUs($event){
    console.log("contact us ...");
    let dialogRef = this.dialog.open(ContactUsComponent,{
      width: '580px',
      height: '480px'
    });
}
}
