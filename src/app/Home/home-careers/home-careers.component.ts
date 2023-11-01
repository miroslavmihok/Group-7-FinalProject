import { Component, OnInit } from '@angular/core';
import { jobPositions } from 'src/app/data/careers';
import { Icareers } from 'src/app/interfaces/icareers';

@Component({
  selector: 'app-home-careers',
  templateUrl: './home-careers.component.html',
  styleUrls: ['./home-careers.component.scss']
})
export class HomeCareersComponent implements OnInit {
  careers: Icareers[] = jobPositions;
  
  ngOnInit(): void {
    this.careers = jobPositions.slice(0, 2);
  }
}
