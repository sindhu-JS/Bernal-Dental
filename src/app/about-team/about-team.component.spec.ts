import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutTeamComponent } from './about-team.component';

describe('AboutTeamComponent', () => {
  let component: AboutTeamComponent;
  let fixture: ComponentFixture<AboutTeamComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
