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

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    FooterComponent,
    AlumniComponent,
    AlumnidetailsComponent,
    EventsDetailsComponent,
    NavbarComponent,
    HomeComponent,
    CareersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
