import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { MainSectionComponent } from './landing/main-section/main-section.component';
import { WelcomeComponent } from './landing/welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { CareCreditComponent } from './carecredit/carecredit.component';
import { TeamComponent } from './landing/team/team.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { CovidInfoComponent } from './covid-info/covid-info.component';
import { HomeCareComponent } from './home-care/home-care.component';
import { XraysComponent } from './x-rays/x-rays.component';
import { ExamComponent } from './exam/exam.component';
import { HowToComponent } from './how-to/how-to.component';
import { PeriodontalComponent } from './Periodontal/Periodontal.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ImplantsComponent } from './implants/implants.component';
import { DenturesComponent } from './dentures/dentures.component';
import { RootCanalComponent } from './root-canal/root-canal.component';
import { FAQComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    MainSectionComponent,
    WelcomeComponent,
    AboutComponent,
    AboutTeamComponent,
    CareCreditComponent,
    ContactComponent,
    TeamComponent,
    InsuranceComponent,
    PatientFormComponent,
    CovidInfoComponent,
    HomeCareComponent,
    XraysComponent,
    ExamComponent,
    HowToComponent,
    PeriodontalComponent,
    DiagnosisComponent,
    TreatmentComponent,
    MaintenanceComponent,
    ImplantsComponent,
    DenturesComponent,
    RootCanalComponent,
    FAQComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
