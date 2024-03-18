import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../../components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule}  from '@angular/material/grid-list';
import { Card } from '../../models/Card';
import { CommonModule } from '@angular/common';
import { MatGridTile } from '@angular/material/grid-list';
import { CardsService } from '../../services/cards.service';




@Component({
  selector: 'app-card-information',
  standalone: true,
  imports: [
    MatCardModule,
    CardComponent,
    MatGridListModule,
    CommonModule,
    MatGridTile,
  ],
  templateUrl: './card-information.component.html',
  styleUrl: './card-information.component.scss'
})

export class CardInformationComponent {

  cards: Card[] = [];
  cardsService: CardsService = inject(CardsService);

  constructor(private titleService: Title, private cardService: CardsService) {
    this.titleService.setTitle('Tarot Scholar - Card Info');

    this.cardService.getAllCards().then((cards: Card[]) => {
      this.cards = cards;
    });

  }
}
