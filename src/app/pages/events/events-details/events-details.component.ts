import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ievents } from 'src/app/interfaces/ievents';
import { eventsData } from 'src/app/data/events';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.scss'],
})
export class EventsDetailsComponent implements OnInit {
  events: Ievents = {} as Ievents;
  id: number = 1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['details'];
      this.events = this.getProductById(this.id, eventsData);
    });
  }

  private getProductById(id: number, events: Ievents[]): Ievents {
    const event = events.find((e) => e.id === id);

    if (event) {
      return event;
    }

    return {} as Ievents;
  }
}
