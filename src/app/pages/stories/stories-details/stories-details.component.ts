import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { storiesData } from 'src/app/data/stories';
import { Istories } from 'src/app/interfaces/istories';

@Component({
  selector: 'app-stories-details',
  templateUrl: './stories-details.component.html',
  styleUrls: ['./stories-details.component.scss'],
})
export class StoriesDetailsComponent implements OnInit {
  stories: Istories = {} as Istories;
  name: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.name = params['name'];
      this.stories = this.getProductByName(this.name, storiesData);
    });
  }

  private getProductByName(name: string, stories: Istories[]): Istories {
    const story = stories.find((s) => s.name === name);
    if (story) {
      return story;
    }
    return {} as Istories;
  }
}
