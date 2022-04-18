package com.codingdojo.dojosandninjas.Repositories;

import java.util.List;

import com.codingdojo.dojosandninjas.models.Ninjas;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NinjaRepository extends CrudRepository<Ninjas, Long> {
    
    List<Ninjas> findAll();
    
}
