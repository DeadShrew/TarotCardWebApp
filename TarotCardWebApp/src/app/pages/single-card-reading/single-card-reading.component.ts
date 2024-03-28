import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FlipcardComponent } from "../../components/flipcard/flipcard.component";
import { CardsService } from '../../services/cards.service';

@Component({
    selector: 'app-single-card-reading',
    standalone: true,
    templateUrl: './single-card-reading.component.html',
    styleUrl: './single-card-reading.component.scss',
    imports: [FlipcardComponent]
})
export class SingleCardReadingComponent {

  constructor(private titleService: Title, private cardService: CardsService) {
    this.titleService.setTitle('Tarot Scholar - Single Card Reading');
  }
}
