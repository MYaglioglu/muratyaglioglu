import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PortfolioComponent } from '../portfolio.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    PortfolioComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  @Input() i: number = 0;
  @Input() title: string = '';
  @Input() language: string = '';
  @Input() imagePath: string = '';
  @Input() description: string = '';
  @Input() liveTest: string = '';
  @Input() gitHub: string = '';

  get isReverse() {
    return this.i % 2 !== 0;
  }
}
