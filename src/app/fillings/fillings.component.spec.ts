import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FillingsComponent } from './fillings.component';

describe('FillingsComponent', () => {
  let component: FillingsComponent;
  let fixture: ComponentFixture<FillingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FillingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
