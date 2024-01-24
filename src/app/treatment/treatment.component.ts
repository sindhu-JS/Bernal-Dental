import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss']
})

/**
 * treatment-component
 */
export class TreatmentComponent implements OnInit {
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
