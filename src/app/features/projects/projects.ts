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
        'Plataforma de gestão de estoque desenvolvida para consultoras e revendedoras. Criada para simplificar o controle de produtos, precificação e organização do catálogo.',
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
        'Blog inspirado no design editorial, com foco em tipografia, experiência de leitura e interfaces minimalistas, desenvolvido com uma arquitetura moderna em Angular.',
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
        'Aplicação para descoberta de filmes integrada à API do TMDB, com busca, títulos em destaque e interface responsiva.',
      image: 'images/projects/aftercredits.png',
      technologies: [
        'Angular',
        'REST API',
        'PrimeNG'
      ],
      githubUrl: 'https://github.com/mfrancy/after-credits',
      liveUrl: ''
    },
  ];

}