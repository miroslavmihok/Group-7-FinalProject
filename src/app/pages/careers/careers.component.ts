import { Component } from '@angular/core';
import { jobPositions } from 'src/app/data/careers';
import { Icareers } from 'src/app/interfaces/icareers';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
  careers: Icareers[] = jobPositions;
}
