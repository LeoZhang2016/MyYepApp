import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta,Title } from '@angular/platform-browser';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-brisb-apart',
  templateUrl: './brisb-apart.component.html',
  styleUrls: ['./brisb-apart.component.scss']
})
export class BrisbApartComponent implements OnInit {

  constructor(public dialog: MatDialog,private metaService: Meta,private titleService : Title) {
    this.addTag();
   }

   addTag() {
    this.titleService.setTitle("Quality Apartments For Sale in Brisbane | YepHome");
    this.metaService.addTag({name: 'description',content: 'Find and Buy Apartments For Sale in Brisbane. YepHome is Australia’s Leading Real Estate Site For Buying Apartments in Brisbane. View our Selections Now.'});
    this.metaService.addTag({name: 'keywords',content: 'apartments for sale brisbane'});
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

   nowBris(){
     window.open('https://www.yephome.com.au/map-display?page=1&type=2&country=au&state=Queensland');
   }
}
