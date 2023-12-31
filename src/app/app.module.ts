import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventsComponent } from './pages/events/events.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { AlumniComponent } from './pages/alumni/alumni.component';
import { AlumnidetailsComponent } from './pages/alumni/alumnidetails/alumnidetails.component';
import { EventsDetailsComponent } from './pages/events/events-details/events-details.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { HomeComponent } from './Home/home.component';
import { CareersComponent } from './pages/careers/careers.component';
import { HeroComponent } from './Home/hero/hero.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { StoriesDetailsComponent } from './pages/stories/stories-details/stories-details.component';
import { HomeAboutComponent } from './Home/home-about/home-about.component';
import { HomeStoriesComponent } from './Home/home-stories/home-stories.component';
import { HomeAlumniComponent } from './Home/home-alumni/home-alumni.component';
import { HomeEventsComponent } from './Home/home-events/home-events.component';
import { HomeCareersComponent } from './Home/home-careers/home-careers.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EventsComponent,
    FooterComponent,
    AlumniComponent,
    AlumnidetailsComponent,
    EventsDetailsComponent,
    NavbarComponent,
    HomeComponent,
    CareersComponent,
    HeroComponent,
    BreadcrumbsComponent,
    StoriesComponent,
    StoriesDetailsComponent,
    HomeAboutComponent,
    HomeStoriesComponent,
    HomeAlumniComponent,
    HomeEventsComponent,
    HomeCareersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
