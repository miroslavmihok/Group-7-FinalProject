import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStoriesComponent } from './home-stories.component';

describe('HomeStoriesComponent', () => {
  let component: HomeStoriesComponent;
  let fixture: ComponentFixture<HomeStoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeStoriesComponent]
    });
    fixture = TestBed.createComponent(HomeStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
