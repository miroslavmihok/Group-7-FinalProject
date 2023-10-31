import { Component ,OnInit  } from '@angular/core';
import { Ibreadcrumbs } from '../interfaces/ibreadcrumbs';
import { ActivatedRoute, NavigationEnd, Router } from'@angular/router';



@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit{
  breadcrumbs: Ibreadcrumbs[] = [];
  isHomePage: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}


  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = this.activatedRoute.snapshot.routeConfig?.path === '';
        this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
      }
    });
  }


  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Ibreadcrumbs[] = []): Ibreadcrumbs[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map((segment) => segment.path).join('/');

      // Skip adding the breadcrumb for the home component (empty route path)
      if (routeURL !== '') {
        url += `/${routeURL}`;
        breadcrumbs.push({ label: child.snapshot.data['breadcrumb'], link: url });
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }



}
