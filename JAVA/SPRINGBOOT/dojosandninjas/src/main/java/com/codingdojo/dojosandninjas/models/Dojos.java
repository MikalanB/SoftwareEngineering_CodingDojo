package com.codingdojo.dojosandninjas.models;

import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Entity;
import javax.persistence.FetchType;

@Entity
@Table(name = "dojos")
public class Dojos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min=3, max=40, message="Dojo Name must be between 3 and 40 characters")
    private String name;

     // This will not allow the createdAt column to be updated after creation
	@Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;

    @OneToMany(mappedBy="dojo", fetch = FetchType.LAZY)
    private List<Ninjas> ninja;

    public Dojos() {
    }

    public Dojos(
        @NotNull @Size(min=3, max=40, message="Name must be between 3 and 40 characters") String name){
        this.name = name;
    }

    public Dojos(Long id,
        @NotNull @Size(min=3, max=40, message="Name must be between 3 and 40 characters") String name,
        @DateTimeFormat(pattern="yyyy-MM-dd") Date createdAt,
        @DateTimeFormat(pattern="yyyy-MM-dd") Date updatedAt
    ) {
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Dojos(Long id,
    @NotNull @Size(min=3, max=40, message="Name must be between 3 and 40 characters") String name,
    List<Ninjas> ninja,
    @DateTimeFormat(pattern="yyyy-MM-dd") Date createdAt,
    @DateTimeFormat(pattern="yyyy-MM-dd") Date updatedAt
    ) {
        this.name = name;
        this.ninja = ninja;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getCreatedAt() {
        return this.createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return this.updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public List<Ninjas> getNinja() {
        return this.ninja;
    }

    public void setNinja(List<Ninjas> ninja) {
        this.ninja = ninja;
    }


    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
	
	
	@PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    } 

}
