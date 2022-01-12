import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Landing';
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta) {
  }

  ngOnInit() {
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd),
    // ).subscribe(()=>{

    //   var rt = this.getChild(this.activatedRoute);

    //   rt.data.subscribe(data=>{
    //      this.titleService.setTitle(data.title)

    //      if(data.description){
    //         this.metaService.updateTag({name:'description',content:data.description})
    //      }else {
    //        this.metaService.updateTag({name:'description',content:data.description})
    //      }

    //      if(data.keywords){
    //       this.metaService.updateTag({name:'keywords',content:data.keywords})
    //      }else {
    //       this.metaService.updateTag({name:'keywords',content:data.keywords})
    //     }

    //     if(data.comments){
    //       this.metaService.updateTag({name:'comments',content:data.comments})
    //      }else {
    //       this.metaService.updateTag({name:'comments',content:data.comments})
    //     }

    //     if(data.title){
    //       this.metaService.updateTag({name:'title',content:data.title})
    //      }else {
    //       this.metaService.updateTag({name:'title',content:data.cotitlemments})
    //     }
    //   })

    // })
  }


  // getChild(activatedRoute: ActivatedRoute) {
  //   if (activatedRoute.firstChild) {
  //     return this.getChild(activatedRoute.firstChild);
  //   } else {
  //     return activatedRoute;
  //   }
  // }
}
