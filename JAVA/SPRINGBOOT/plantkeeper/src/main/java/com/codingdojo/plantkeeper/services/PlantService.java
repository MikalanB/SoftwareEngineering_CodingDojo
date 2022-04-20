package com.codingdojo.plantkeeper.services;

import java.util.List;
import java.util.Optional;

import com.codingdojo.plantkeeper.models.Plant;
import com.codingdojo.plantkeeper.repositories.PlantRepository;

import org.springframework.stereotype.Service;

@Service
public class PlantService {

    private final PlantRepository plantRepository;

    public PlantService(PlantRepository plantRepository) {
        this.plantRepository = plantRepository;
    }

    // find all plants in the repository
    public List<Plant> allPlants() {
        return plantRepository.findAll();
    }

    // find one plant
    public Plant findOne(Long id) {
        Optional<Plant> optionalPlant = plantRepository.findById(id);
        if (optionalPlant.isPresent()) {
            return optionalPlant.get();
        } else {
            return null;
        }
    }

    public Plant create(Plant plant) {
        return plantRepository.save(plant);
    }

    public Plant update(Plant plant) {
        return plantRepository.save(plant);
    }

    public void delete(Long id) {
        plantRepository.deleteById(id);
    }
    
}
