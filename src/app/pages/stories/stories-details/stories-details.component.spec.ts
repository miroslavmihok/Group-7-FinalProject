import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesDetailsComponent } from './stories-details.component';

describe('StoriesDetailsComponent', () => {
  let component: StoriesDetailsComponent;
  let fixture: ComponentFixture<StoriesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoriesDetailsComponent]
    });
    fixture = TestBed.createComponent(StoriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
