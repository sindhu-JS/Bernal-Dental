import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DenturesComponent } from './dentures.component';

describe('DenturesComponent', () => {
  let component: DenturesComponent;
  let fixture: ComponentFixture<DenturesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DenturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
