import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carecredit',
  templateUrl: './carecredit.component.html',
  styleUrls: ['./carecredit.component.scss']
})

/**
 * carecredit-component
 */
export class CareCreditComponent implements OnInit {
  // Form
  itemData!: UntypedFormGroup;
  submitted = false;

  constructor() { }

  ngOnInit(): void {
    
  }
  
}
