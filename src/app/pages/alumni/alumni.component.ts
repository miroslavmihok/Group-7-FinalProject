import { Component } from '@angular/core';
import { alumniData } from 'src/app/data/alumni';
import { Ialumni } from 'src/app/interfaces/ialumni';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss']
})
export class AlumniComponent {

  alumni:Ialumni[] = alumniData;



}
