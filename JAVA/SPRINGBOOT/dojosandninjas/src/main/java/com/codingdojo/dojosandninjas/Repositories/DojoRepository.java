package com.codingdojo.dojosandninjas.Repositories;

import java.util.List;

import com.codingdojo.dojosandninjas.models.Dojos;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DojoRepository extends CrudRepository<Dojos, Long> {

    List<Dojos> findAll();
    
}
