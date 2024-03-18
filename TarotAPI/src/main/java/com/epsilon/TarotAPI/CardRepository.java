package com.epsilon.TarotAPI;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardRepository extends JpaRepository<Card, Integer> {
	
	Optional<Card> findById(Integer id); 
	
}
