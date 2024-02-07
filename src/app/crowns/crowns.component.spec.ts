import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrownsComponent } from './crowns.component';

describe('CrownsComponent', () => {
  let component: CrownsComponent;
  let fixture: ComponentFixture<CrownsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrownsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
