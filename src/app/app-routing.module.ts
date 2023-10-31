import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniComponent } from './pages/alumni/alumni.component';
import { AlumnidetailsComponent } from './pages/alumni/alumnidetails/alumnidetails.component';
import { EventsDetailsComponent } from './pages/events/events-details/events-details.component';
import { EventsComponent } from './pages/events/events.component';
import { CareersComponent } from './pages/careers/careers.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
