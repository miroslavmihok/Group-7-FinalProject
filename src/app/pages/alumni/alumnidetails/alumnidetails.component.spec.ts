import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnidetailsComponent } from './alumnidetails.component';

describe('AlumnidetailsComponent', () => {
  let component: AlumnidetailsComponent;
  let fixture: ComponentFixture<AlumnidetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnidetailsComponent]
    });
    fixture = TestBed.createComponent(AlumnidetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
