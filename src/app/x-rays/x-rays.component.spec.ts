import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { XraysComponent } from './x-rays.component';

describe('XraysComponent', () => {
  let component: XraysComponent;
  let fixture: ComponentFixture<XraysComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ XraysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
