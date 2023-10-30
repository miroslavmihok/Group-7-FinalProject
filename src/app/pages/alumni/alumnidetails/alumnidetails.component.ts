import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params  } from '@angular/router';
import { alumniData } from 'src/app/data/alumni';
import { Ialumni } from 'src/app/interfaces/ialumni';

@Component({
  selector: 'app-alumnidetails',
  templateUrl: './alumnidetails.component.html',
  styleUrls: ['./alumnidetails.component.scss']
})
export class AlumnidetailsComponent implements OnInit{
  alumni:Ialumni =  {} as Ialumni;
  id:number = 0;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.alumni = alumniData[this.id];
     });
  }
}
