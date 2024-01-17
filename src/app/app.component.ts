import { Component, Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public url: any;
  title = 'dental-site'

  constructor(private router: Router, private _renderer2: Renderer2,  @Inject(DOCUMENT) private _document: Document) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

   
  public ngOnInit() {
    let script = this._renderer2.createElement('script');
    script.src  = `/assets/tilt.js`;   
    this._renderer2.appendChild(this._document.body, script);
  }
}