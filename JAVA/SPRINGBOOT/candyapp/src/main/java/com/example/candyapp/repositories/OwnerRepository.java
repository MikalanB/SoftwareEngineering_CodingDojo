package com.example.candyapp.repositories;

import java.util.List;

import com.example.candyapp.models.Owner;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OwnerRepository extends CrudRepository<Owner, Long> {

    List<Owner> findAll();
}
