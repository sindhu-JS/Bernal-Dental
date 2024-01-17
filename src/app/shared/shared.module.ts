import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from "./components/header/header.component";
import { ScrollspyDirective } from './scrollspy.directive';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [ScrollspyDirective, FooterComponent,HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // tslint:disable-next-line: max-line-length
  exports: [ScrollspyDirective, FooterComponent]
})
export class SharedModule { }
