import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cross-reading',
  standalone: true,
  imports: [],
  templateUrl: './cross-reading.component.html',
  styleUrl: './cross-reading.component.scss'
})
export class CrossReadingComponent {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Tarot Scholar - Cross Reading');
  }
}
