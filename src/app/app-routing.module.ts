import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CareCreditComponent } from './carecredit/carecredit.component';
import { ServicesComponent } from './services/services.component';
import { AboutTeamComponent } from './about-team/about-team.component';
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

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'about-team',
    component: AboutTeamComponent
  },
  {
    path: 'homecare',
    component: HomeCareComponent
  },
  {
    path: 'exam',
    component: ExamComponent
  },
  {
    path: 'xrays',
    component: XraysComponent
  },
  {
    path: 'how-to',
    component: HowToComponent
  },
  {
    path: 'root-canal',
    component: RootCanalComponent
  },
  {
    path: 'periodontal',
    component: PeriodontalComponent
  },
  {
    path: 'treatment',
    component: TreatmentComponent
  },
  {
    path: 'implants',
    component: ImplantsComponent
  },
  {
    path: 'dentures',
    component: DenturesComponent
  },
  {
    path: 'diagnosis',
    component: DiagnosisComponent
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent
  },
  {
    path: 'insurance',
    component: InsuranceComponent
  },
  {
    path: 'patient-form',
    component: PatientFormComponent
  },
  {
    path: 'care-credit',
    component: CareCreditComponent
  },
  {
    path: 'covid',
    component: CovidInfoComponent
  },
  {
    path: 'faq',
    component: FAQComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    useHash: true,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
