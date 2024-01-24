import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImplantsComponent } from './implants.component';

describe('ImplantsComponent', () => {
  let component: ImplantsComponent;
  let fixture: ComponentFixture<ImplantsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
