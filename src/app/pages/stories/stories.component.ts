import { Component } from '@angular/core';
import { storiesData } from 'src/app/data/stories';
import { Istories } from 'src/app/interfaces/istories';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent {
  stories: Istories[] = storiesData;
}
