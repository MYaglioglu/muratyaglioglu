import { CommonModule, NgFor } from '@angular/common';
import { Component} from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    ProjectsComponent,
    NgFor,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  myPortfolio = [
    {
      title: 'Join',
      language: 'HTML | CSS | JavaScript',
      imagePath: 'assets/img/portfolio/portfolio1.jpg',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      liveTest: 'https://gruppe-639.developerakademie.net/join/index.html',
      gitHub: 'https://github.com/MYaglioglu/join639',
    },
    {
      title: 'El Pollio Loco',
      language: 'HTML | CSS | JavaScript',
      imagePath: 'assets/img/portfolio/portfolio2.jpg',
      description: 'Jump and run game based on object-oriented approach. Help Pepe to collect all the coins and take down the evil chicken.',
      liveTest: 'https://murat-yaglioglu.developerakademie.net/polloloco/index.html',
      gitHub: 'https://github.com/MYaglioglu/elpolloloco',
    },
    {
      title: 'Pokedex',
      language: 'HTML | CSS | JavaScript | API',
      imagePath: 'assets/img/portfolio/portfolio3.jpg',
      description: 'Based on the PokéAPI - a simple library that provides and catalogues pokemon information.',
      liveTest: 'https://murat-yaglioglu.developerakademie.net/pokedex/index.html',
      gitHub: 'https://github.com/MYaglioglu/pokedex',
    },
  ];
}
