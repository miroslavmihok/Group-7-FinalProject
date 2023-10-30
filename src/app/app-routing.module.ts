import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniComponent } from './pages/alumni/alumni.component';
import { AlumnidetailsComponent } from './pages/alumni/alumnidetails/alumnidetails.component';

const routes: Routes = [
  {
    path:"alumni", component:AlumniComponent
  },
  {
    path:"alumni/:id", component:AlumnidetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
