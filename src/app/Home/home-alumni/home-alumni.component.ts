import { Component } from '@angular/core';
import { alumniData } from 'src/app/data/alumni';
import { Ialumni } from 'src/app/interfaces/ialumni';

@Component({
  selector: 'app-home-alumni',
  templateUrl: './home-alumni.component.html',
  styleUrls: ['./home-alumni.component.scss']
})
export class HomeAlumniComponent {
  alumni:Ialumni[] = alumniData;
  imgClasses: string[] = ['rounded-start-circle', 'rounded', 'rounded-end-circle'];


}
