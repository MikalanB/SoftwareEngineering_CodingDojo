package com.example.candyapp.services;

import java.util.List;
import java.util.Optional;

import com.example.candyapp.models.Candy;
import com.example.candyapp.repositories.CandyRepository;

import org.springframework.stereotype.Service;

@Service
public class CandyService {
    
    // Injecting the repository
	private final CandyRepository candyRepository;

	
	
	public CandyService(CandyRepository candyRepository) {
		this.candyRepository = candyRepository;
	}

	// Find All Candy From Repo
	public List<Candy> allCandys() {
		return candyRepository.findAll();
	}
	
	
	// Create a Candy From Repo
	public Candy createCandy(Candy candy) {
		return candyRepository.save(candy);
	}
	
	
	// Find One Candy From Repo
	public Candy findCandy(Long id) {
		
		Optional<Candy> optCandy = candyRepository.findById(id);
		
		if(optCandy.isPresent()) {
			return optCandy.get();
			
		} else {
			
			return null;
		}
		
	}
	
	// Delete A Candy From Repo 
	public void deleteCandy(Long id) {
		candyRepository.deleteById(id);
	}

    //Update a candy
    public Candy updateCandy(Candy candy) {
        return candyRepository.save(candy);
    }
	
    
}
