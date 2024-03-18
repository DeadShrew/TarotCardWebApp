import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-single-card-reading',
  standalone: true,
  imports: [],
  templateUrl: './single-card-reading.component.html',
  styleUrl: './single-card-reading.component.scss'
})
export class SingleCardReadingComponent {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Tarot Scholar - Single Card Reading');
  }
}
