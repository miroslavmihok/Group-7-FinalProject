import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  benefitsList: {
    icon: string;
    heading: string;
    description: string;
  }[] = [
    {
      icon: 'fa-solid fa-code about-icon text-end',
      heading: 'Social Well-Being',
      description:
        'Web developer alumni establishing strong professional relationships and a sense of camaraderie within the tech community, both online and offline.',
    },
    {
      icon: 'fa-solid fa-coins about-icon text-end',
      heading: 'Financial Well-Being',
      description:
        'Web developer alumni effectively managing their financial matters to alleviate stress and enhance financial security as they navigate the digital landscape.',
    },
    {
      icon: 'fa-solid fa-person about-icon text-end',
      heading: 'Community Well-Being',
      description:
        'Web developer alumni actively participating in the tech ecosystems where they work, enjoying their tech-centric environments, and feeling secure while taking pride in the tech communities they contribute to.',
    },
    {
      icon: 'fa-solid fa-hands-praying about-icon text-end',
      heading: 'Purpose Well-Being',
      description:
        'Web developer alumni finding fulfillment in their daily work and remaining motivated to excel in their tech careers.',
    },
    {
      icon: 'fa-solid fa-tree about-icon text-end',
      heading: 'Mental Well-Being',
      description:
        'Web developer alumni prioritizing mental health, managing stress, and fostering a balanced work-life environment for improved overall well-being.',
    },
    {
      icon: 'fa-solid fa-thumbs-up about-icon text-end',
      heading: 'Career Growth Well-Being',
      description:
        'Web developer alumni continually expanding their knowledge and skills, staying updated with evolving technologies, and experiencing personal and professional growth in the dynamic field of web development.',
    },
  ];

  splitBenefitsIntoGroups() {
    const groups = [];
    for (let i = 0; i < this.benefitsList.length; i += 2) {
      groups.push(this.benefitsList.slice(i, i + 2));
    }
    return groups;
  }
}
