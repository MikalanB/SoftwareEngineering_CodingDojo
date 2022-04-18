package com.codingdojo.dojosandninjas.Services;

import java.util.List;
import java.util.Optional;

import com.codingdojo.dojosandninjas.Repositories.NinjaRepository;
import com.codingdojo.dojosandninjas.models.Ninjas;

import org.springframework.stereotype.Service;

@Service
public class NinjaService {

    private final NinjaRepository ninjaRepository;

    public NinjaService(NinjaRepository ninjaRepository) {
        this.ninjaRepository = ninjaRepository;
    }

    // find all ninjas
    public List<Ninjas> allNinjas() {
        return ninjaRepository.findAll();
    }

    //create a Ninja
    public Ninjas create(Ninjas ninja){
        return ninjaRepository.save(ninja);
    }

    //find a ninja by id
    public Ninjas findNinja(Long id) {
        Optional<Ninjas> optionalNinja = ninjaRepository.findById(id);

        if (optionalNinja.isPresent()) {
            return optionalNinja.get();
        } else {
            return null;
        }
    }
    
    //delet a ninja by id
    public void deleteNinja(Long id) {
        ninjaRepository.deleteById(id);
    }

    //update a ninja by id
    public Ninjas updateNinja(Ninjas ninja) {
        return ninjaRepository.save(ninja);
    }
}
