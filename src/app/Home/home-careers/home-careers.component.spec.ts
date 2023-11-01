import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCareersComponent } from './home-careers.component';

describe('HomeCareersComponent', () => {
  let component: HomeCareersComponent;
  let fixture: ComponentFixture<HomeCareersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCareersComponent]
    });
    fixture = TestBed.createComponent(HomeCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
