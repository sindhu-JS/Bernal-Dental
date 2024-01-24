import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeCareComponent } from './home-care.component';

describe('HomeCareComponent', () => {
  let component: HomeCareComponent;
  let fixture: ComponentFixture<HomeCareComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
