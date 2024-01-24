import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Menu
export interface Menu {
	path?: string;
	title?: string;
   type?: string;
   icon?:string;
	badgeType?: string;
	badgeValue?: string;
   active?: boolean;
   megaMenu?: boolean;
   megaMenuType?: string; // small, medium, large
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() {   }

  MENUITEMS: Menu[] = [
	 {
			title: 'About', type: 'sub', children: [
            { path: '/about-team', title: 'About The Doctor', type: 'link' },
				{ path: '/about', title: 'About The Office', type: 'link' },
			],
    },
    {
      title: 'Services', type: 'sub', children: [
         { 
	      	title: 'Cleanings & Prevention',  type: 'sub', children: [
               { path: '/exam', title: 'Dental Exams & Cleanings',  type: 'link' },
               { path: '/xrays', title: 'Dental X-Rays',  type: 'link' },
               { path: '/homecare', title: 'Home Care',  type: 'link' },
               { path: '/how-to', title: 'How to Properly Brush & Floss',  type: 'link' }
	      	]
        },
        { 
         title: 'Cosmetic Dentistory',  type: 'sub', children: [
            { path: '', title: 'Composite Fillings',  type: 'link' },
            { path: '', title: 'Porcelain Crowns (Caps)',  type: 'link' },
            { path: '', title: 'Porcelain Fixed Bridges',  type: 'link' },
            { path: '', title: 'Porcelain Veneers',  type: 'link' },
            { path: '', title: 'Teeth Whitening',  type: 'link' }
         ]
         },
         { 
            title: 'Periodontal Disease',  type: 'sub', children: [
               { path: '/periodontal', title: 'What is Periodontal (Gum) Disease?',  type: 'link' },
               { path: '/diagnosis', title: 'Diagnosis',  type: 'link' },
               { path: '/treatment', title: 'Treatment',  type: 'link' },
               { path: '/maintenance', title: 'Maintenance',  type: 'link' }
            ]
         },
         { 
            title: 'Restorations',  type: 'sub', children: [
               { path: '', title: 'Composite Fillings',  type: 'link' },
               { path: '', title: 'Crowns (Caps)',  type: 'link' },
               { path: '/implants', title: 'Dental Implants',  type: 'link' },
               { path: '/dentures', title: 'Dentures & Partial Dentures',  type: 'link' },
               { path: '', title: 'Fixed Bridges',  type: 'link' },
               { path: '/root-canal', title: 'Root Canal Therapy',  type: 'link' }
            ]
         },
         { title: 'Dental Videos', type: 'link', path: ''},
      ],
    },
    {
      title: 'Patient Responsibility', type: 'sub', children: [
         { path: '/insurance', title: 'Insurance', type: 'link' },
         { path: '/patient-form', title: 'Patient Forms', type: 'link' },
         { path: '/care-credit', title: 'CareCredit', type: 'link' },
         { path: '/covid', title: 'COVID-19 Information', type: 'link' },
         { path: '', title: 'FAQ', type: 'link' },
      ],
    },
    { title: 'Contact', type: 'link', path: '/contact'},
   ]
  
  	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
   
}
