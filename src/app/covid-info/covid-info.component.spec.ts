import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CovidInfoComponent } from './covid-info.component';

describe('CovidInfoComponent', () => {
  let component: CovidInfoComponent;
  let fixture: ComponentFixture<CovidInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
