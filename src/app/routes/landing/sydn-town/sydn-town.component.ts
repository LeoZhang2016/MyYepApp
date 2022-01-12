import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta,Title } from '@angular/platform-browser';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-sydn-town',
  templateUrl: './sydn-town.component.html',
  styleUrls: ['./sydn-town.component.scss']
})
export class SydnTownComponent implements OnInit {

  constructor(public dialog: MatDialog,private metaService: Meta,private titleService: Title) {
    this.addTag();
   }

   addTag() {
    this.titleService.setTitle("New Townhouses For Sale Sydney | Off the Plan Townhouses");
    this.metaService.addTag({name: 'description',content: 'Find and Buy Off The Plan Townhouses in Sydney. YepHome is Australia’s Leading Real Estate Site For Off The Plan Townhouses in Sydney. View our Listings Now.'});
    this.metaService.addTag({name: 'keywords',content: 'off the plan townhouses sydney'});
   }


  ngOnInit() {
  }
  contatcUs($event){
    console.log("contact us ...");
    let dialogRef = this.dialog.open(ContactUsComponent,{
      width: '580px',
      height: '480px'
    });
}


}
