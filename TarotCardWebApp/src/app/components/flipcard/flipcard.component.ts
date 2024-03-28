import { Component, OnInit, inject } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../../services/cards.service';
import { Card } from '../../models/Card';
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'app-flipcard',
    standalone: true,
    templateUrl: './flipcard.component.html',
    styleUrl: './flipcard.component.scss',
    animations: [
        trigger('flipState', [
            state('active', style({
                transform: 'rotateY(180deg)'
            })),
            state('inactive', style({
                transform: 'rotateY(0)'
            })),
            transition('active => inactive', animate('500ms ease-out')),
            transition('inactive => active', animate('500ms ease-in'))
        ])
    ],
    imports: [CardComponent]
})
export class FlipcardComponent implements OnInit{

  route: ActivatedRoute = inject(ActivatedRoute);
  cardService = inject(CardsService); 
  card: Card | undefined; 

  constructor() {
    const cardId = parseInt(this.route.snapshot.params['id']);
    
    this.cardService.getRandomCardById(cardId).then(card => {
      this.card = card;
    });
  }

  ngOnInit() {
  }

  flip: string = 'inactive';

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

}
