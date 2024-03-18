package com.epsilon.TarotAPI;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CardsService {

	
	@Autowired
	private CardRepository repository; 
	
	public List<Card>getCards() {
		return repository.findAll();
	}
	
	public Card getCard(Integer id) {
		Optional<Card> card = repository.findById(id);
		if (card.isPresent()) {
			return card.get();
		}
		throw new RuntimeException("Card not found for id " + id); 
	}
	
	//Remaining methods are unused, they are only here so that I remember how to add CRUD functionality in Spring Boot. 
	
	public void addCard(Card card) {
		repository.save(card);
	}

	public void updateCard(Card card) {
		repository.save(card);
	}

	public void deleteCard(Integer id) {
		repository.deleteById(id);
	}

	
	
}
