import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

/**
 * Contact-component
 */
export class ContactComponent implements OnInit {
  // Form
  itemData!: UntypedFormGroup;
  submitted = false;

  constructor(public formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    // Validation
    this.itemData = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      description: ['', [Validators.required]],
    })
  }

  // * Returns form
  get form() {
    return this.itemData.controls;
  }
  createJob() {
    if (this.itemData.valid) {
    }
    this.submitted = true;
  } 
}
