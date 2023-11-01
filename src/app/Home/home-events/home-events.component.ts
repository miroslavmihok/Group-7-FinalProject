import { Component } from '@angular/core';
import { eventsData } from 'src/app/data/events';
import { Ievents } from 'src/app/interfaces/ievents';

@Component({
  selector: 'app-home-events',
  templateUrl: './home-events.component.html',
  styleUrls: ['./home-events.component.scss']
})
export class HomeEventsComponent {
  events: Ievents[] = eventsData;
}
