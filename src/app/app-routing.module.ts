import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniComponent } from './pages/alumni/alumni.component';
import { AlumnidetailsComponent } from './pages/alumni/alumnidetails/alumnidetails.component';
import { EventsDetailsComponent } from './pages/events/events-details/events-details.component';
import { EventsComponent } from './pages/events/events.component';
import { CareersComponent } from './pages/careers/careers.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './Home/home.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { StoriesDetailsComponent } from './pages/stories/stories-details/stories-details.component';

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
  {
    path: 'events',
    component: EventsComponent,
    data: {
      breadcrumb: 'Events',
    },
  },

  {
    path: 'events/:details',
    component: EventsDetailsComponent,
    data: {
      breadcrumb: 'Events Details',
    },
  },
  {
    path: 'careers',
    component: CareersComponent,
    data: {
      breadcrumb: 'Careers',
    },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      breadcrumb: 'About',
    },
  },

  {
    path: 'stories',
    component: StoriesComponent,
    data: {
      breadcrumb: 'Stories',
    },
  },
  {
    path: 'stories-details/:name',
    component: StoriesDetailsComponent,
    data: {
      breadcrumb: 'Story Detail',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
