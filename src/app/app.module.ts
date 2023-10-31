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
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './Home/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    FooterComponent,
    AlumniComponent,
    AlumnidetailsComponent,
    EventsDetailsComponent,
    HomeComponent,
    HeroComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
