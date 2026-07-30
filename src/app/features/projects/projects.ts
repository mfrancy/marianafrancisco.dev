import { Component } from '@angular/core';

interface Project {
  number: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      number: '01',
      title: 'MarluHub',
      description:
        'Inventory management platform created for Natura and O Boticário consultants. Built to simplify stock control, pricing and product organization.',
      image: 'images/projects/marluhub.png',
      technologies: [
        'Angular',
        'TypeScript',
        'SCSS',
        'PrimeNG',
        '.NET',
        'PostgreSQL'
      ],
      githubUrl: 'https://github.com/mfrancy/marlu-hub',
      liveUrl: ''
    },

    {
      number: '02',
      title: 'When The Blog',
      description:
        'Editorial-inspired blog focused on typography, reading experience and clean interfaces, designed with a modern Angular architecture.',
      image: 'images/projects/whentheblog.png',
      technologies: [
        'Angular',
        'Tailwind',
        'TypeScript',
      ],
      githubUrl: 'https://github.com/mfrancy/when-the-blog'
    },

    {
      number: '03',
      title: 'AfterCredits',
      description:
        'Movie discovery application integrated with the TMDB API, featuring search, trending titles and responsive layouts.',
      image: 'images/projects/aftercredits.png',
      technologies: [
        'Angular',
        'REST API',
        'SCSS'
      ],
      githubUrl: 'https://github.com/mfrancy/aftercredits',
      liveUrl: ''
    },

    {
      number: '04',
      title: 'Biblioteca C#',
      description:
        'Object-oriented programming study project built in C#, applying concepts such as encapsulation, inheritance and collections.',
      image: 'images/projects/biblioteca.png',
      technologies: [
        'C#',
        '.NET',
        'POO'
      ],
      githubUrl: 'https://github.com/mfrancy/biblioteca-console'
    }
  ];

}