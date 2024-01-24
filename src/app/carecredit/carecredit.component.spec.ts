import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CareCreditComponent } from './carecredit.component';

describe('CareCreditComponent', () => {
  let component: CareCreditComponent;
  let fixture: ComponentFixture<CareCreditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CareCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
