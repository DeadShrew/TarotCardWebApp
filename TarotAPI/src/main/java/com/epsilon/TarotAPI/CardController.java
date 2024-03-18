package com.epsilon.TarotAPI;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class CardController {

	@Autowired
	private CardsService service; 
	
	@GetMapping("/cards")
	public List<Card> getCards(){
		return service.getCards();
	}
	
	@GetMapping("/cards/{id}")
	public Card getCard(@PathVariable Integer id) {
		return service.getCard(id);
	}
	
	//Remaining methods are unused, they are only here so that I remember how to add CRUD functionality in Spring Boot. 
	
	@PostMapping("/cards/addnew")
	public void addCard(@RequestBody Card card) {
		service.addCard(card);
	}
	
	@PutMapping("/cards/{id}/edit") 
	public void updateCard(@PathVariable("id") Integer id, @RequestBody Card card) {
		service.updateCard(card);
	}
	
	@DeleteMapping("/cards/{id}/delete")
	public void deleteCard(@PathVariable("id") Integer id) {
		service.deleteCard(id);
	}
}
