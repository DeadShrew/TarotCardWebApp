import { Component, inject} from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { Card } from '../../models/Card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.scss'
})
export class CardDetailsComponent {
  
  route: ActivatedRoute = inject(ActivatedRoute);
  cardService = inject(CardsService); 
  card: Card | undefined; 

  constructor() {
    const cardId = parseInt(this.route.snapshot.params['id']);
    
    this.cardService.getCardById(cardId).then(card => {
      this.card = card;
    });
  }

}
