package com.example.candyapp.services;

import java.util.List;
import java.util.Optional;

import com.example.candyapp.models.Owner;
import com.example.candyapp.repositories.OwnerRepository;

public class OwnerService {
    
    private final OwnerRepository ownerRepository;

    public OwnerService(OwnerRepository ownerRepository) {
        this.ownerRepository = ownerRepository;
    }

    //find all owners
    public List<Owner> allOwners() {
        return ownerRepository.findAll();
    }

    //Create an owner 
    public Owner createOwner(Owner owner) {
        return ownerRepository.save(owner);
    }

    // Find one owner from repo  with id
    public Owner findOwner(Long id) {
        Optional<Owner> optOwner = ownerRepository.findById(id);
        if (optOwner.isPresent()) {
            return optOwner.get();
        } else {
            return null;
        }
    }

    // Delete an owner from repo
    public void deleteOwner(Long id) {
        ownerRepository.deleteById(id);
    }


}
