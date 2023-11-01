import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlumniComponent } from './home-alumni.component';

describe('HomeAlumniComponent', () => {
  let component: HomeAlumniComponent;
  let fixture: ComponentFixture<HomeAlumniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAlumniComponent]
    });
    fixture = TestBed.createComponent(HomeAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
