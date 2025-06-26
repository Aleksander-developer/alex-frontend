import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
  techList: string[] = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'AJAX',
    'TypeScript',
    'ECMAScript 6+',
    'Responsive Design',
    'jQuery',
    'Bootstrap',
    'GIT',
    'Angular',
    'Angular Avanzato',
    'Node.js',
    'Express',
    'MongoDB Atlas',
    'DataBase MySQL'
  ];

  cols: number = 4;

  constructor(private breakpointObserver: BreakpointObserver) {}

  

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.cols = 1;
      } else if (result.breakpoints[Breakpoints.Small]) {
        this.cols = 2;
      } else if (result.breakpoints[Breakpoints.Medium]) {
        this.cols = 3;
      } else {
        this.cols = 4;
      }
    });
  }

  // FEATURED PROJECTS SECTION
  featuredProjects = [
    {
      title: 'Portfolio Web App',
      description: 'Un sito personale responsive costruito con Angular e Material Design.',
      image: 'assets/images/projects/portfolio.png',
      link: '/progetti/portfolio-web-app'
    },
    {
      title: 'Gestione Task',
      description: 'Applicazione web per la gestione di attività, con backend Node.js e MongoDB.',
      image: 'assets/images/projects/task-manager.png',
      link: '/progetti/task-manager'
    },
    {
      title: 'E-commerce Demo',
      description: 'Demo di e-commerce con Angular, Express e MySQL, sistema completo di ordini.',
      image: 'assets/images/projects/ecommerce.png',
      link: '/progetti/ecommerce'
    }
  ];

}
