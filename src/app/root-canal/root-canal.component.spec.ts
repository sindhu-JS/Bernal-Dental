import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RootCanalComponent } from './root-canal.component';

describe('RootCanalComponent', () => {
  let component: RootCanalComponent;
  let fixture: ComponentFixture<RootCanalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RootCanalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
