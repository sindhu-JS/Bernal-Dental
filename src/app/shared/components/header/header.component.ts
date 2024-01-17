import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: transparent;
      color: white;
      border-radius : 10px;
    }
    .dark-modal .modal-header {
      border : none
    }
    .dark-modal .close {
      color: white;
    }
  `]
})
export class HeaderComponent implements OnInit {
  id = 'JlvxDa7Sges';

  private player: any;
  private ytEvent: any;
  constructor(private modalService: NgbModal) {
  }
  currentSection = 'home';

  ngOnInit(): void {
  }
  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  // windowScroll() {
  //   const navbar = document.getElementById('navbar');
  //   if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
  //     navbar.style.backgroundColor = '#272a33';
  //     navbar.style.padding = '10px';
  //   }
  //   else {
  //     navbar.style.backgroundColor = '';
  //     navbar.style.padding = '20px';
  //   }
  // }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }
  /**
   * Toggle navbar
   */
  // toggleMenu() {
  //   document.getElementById('navbarCollapse').classList.toggle('show');
  // }
}