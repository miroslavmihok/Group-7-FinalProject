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
  },
  {
    path: 'alumni/:id',
    component: AlumnidetailsComponent,
  },
  { path: 'events', component: EventsComponent },
  { path: 'events/:details', component: EventsDetailsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'stories-details/:name', component: StoriesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
