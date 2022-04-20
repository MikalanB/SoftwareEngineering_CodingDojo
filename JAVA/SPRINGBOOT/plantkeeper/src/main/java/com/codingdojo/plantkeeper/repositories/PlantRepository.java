package com.codingdojo.plantkeeper.repositories;

import java.util.List;

import com.codingdojo.plantkeeper.models.Plant;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlantRepository extends CrudRepository<Plant, Long> {

    // need to find all repositories
    List<Plant> findAll();
}
