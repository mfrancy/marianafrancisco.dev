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
      title: 'Music Twins',
      description:
        'Aplicação de comparação musical entre usuários do Last.fm, com integração à API, processamento de dados e uma interface editorial desenvolvida em Angular.',
      image: 'images/projects/musictwin.png',
      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'SCSS',
        'Last.fm API',
      ],
      githubUrl: 'https://github.com/mfrancy/music-twin'
    },

    {
      number: '03',
      title: 'AfterCredits',
      description:
        'Aplicação para comparar hábitos musicais entre usuários do Last.fm, com integração à API e processamento de dados em Angular.',
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