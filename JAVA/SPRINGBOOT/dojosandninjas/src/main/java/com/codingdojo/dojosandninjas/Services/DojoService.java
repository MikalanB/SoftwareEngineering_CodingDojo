package com.codingdojo.dojosandninjas.Services;

import java.util.List;
import java.util.Optional;

import com.codingdojo.dojosandninjas.Repositories.DojoRepository;
import com.codingdojo.dojosandninjas.models.Dojos;

import org.springframework.stereotype.Service;

@Service
public class DojoService {
    
    private final DojoRepository dojoRepository;

    public DojoService(DojoRepository dojoRepository) {
        this.dojoRepository = dojoRepository;
    }

    // find all dojos
    public List<Dojos> allDojos() {
        return dojoRepository.findAll();
    }

    //create a dojo
    public Dojos create(Dojos dojo){
        return dojoRepository.save(dojo);
    }

    //find a dojo by id
    public Dojos findDojo(Long id) {
        Optional<Dojos> optionalDojo = dojoRepository.findById(id);

        if (optionalDojo.isPresent()) {
            return optionalDojo.get();
        } else {
            return null;
        }
    }

    //delet a dojo by id
    public void deleteDojo(Long id) {
        dojoRepository.deleteById(id);
    }

    //update a dojo by id
    public Dojos updateDojo(Dojos dojo) {
        return dojoRepository.save(dojo);
    }


}
