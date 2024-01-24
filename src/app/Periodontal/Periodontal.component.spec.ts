import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PeriodontalComponent } from './Periodontal.component';

describe('PeriodontalComponent', () => {
  let component: PeriodontalComponent;
  let fixture: ComponentFixture<PeriodontalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
