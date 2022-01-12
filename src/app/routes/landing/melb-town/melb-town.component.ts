import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta, MetaDefinition,Title } from '@angular/platform-browser';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-melb-town',
  templateUrl: './melb-town.component.html',
  styleUrls: ['./melb-town.component.scss']
})
export class MelbTownComponent implements OnInit {

  constructor(public dialog: MatDialog,private metaService: Meta,private titleService:Title) {
    this.addTag();
}

addTag() {
this.titleService.setTitle("Townhouses For Sale in Melbourne | Off the Plan Townhouses");
this.metaService.addTag({name: 'description',content: 'Find and Buy Off The Plan Townhouses in Melbourne. YepHome is Australia’s Leading Real Estate Site For Off The Plan Townhouses in Melbourne. Call Now.'});
this.metaService.addTag({name: 'keywords',content: 'off the plan townhouse melbourne'});
}

ngOnInit(): void {
}

contatcUs($event){
console.log("contact us ...");
let dialogRef = this.dialog.open(ContactUsComponent,{
  width: '580px',
  height: '480px'
  });
}

}
