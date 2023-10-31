import { Component } from '@angular/core';
import { eventsData } from 'src/app/data/events';
import { Ievents } from 'src/app/interfaces/ievents';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  events: Ievents[] = eventsData;
}
