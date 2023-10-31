import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniComponent } from './pages/alumni/alumni.component';
import { AlumnidetailsComponent } from './pages/alumni/alumnidetails/alumnidetails.component';
import { EventsDetailsComponent } from './pages/events/events-details/events-details.component';
import { EventsComponent } from './pages/events/events.component';
import { CareersComponent } from './pages/careers/careers.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './Home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

  },
  {
    path: 'alumni',
    component: AlumniComponent,
    data: {
      breadcrumb: 'Alumni',
    },
  },
  {
    path: 'alumni/:id',
    component: AlumnidetailsComponent,
    data: {
      breadcrumb: 'Alumni Details',
    },
  },
  { path: 'events', component: EventsComponent,
  data: {
    breadcrumb: 'Events',
  },
},

  { path: 'events/:details', component: EventsDetailsComponent,
  data: {
    breadcrumb: 'Events Details',
  }, },
  { path: 'careers', component: CareersComponent,
    data: {
    breadcrumb: 'Careers',
  }, },
  { path: 'about', component: AboutComponent,data: {
    breadcrumb: 'About',
  }, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
