package com.codingdojo.dojosandninjas.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "ninjas")
public class Ninjas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min=3, max=40, message="First name must be between 3 and 40 characters")
    private String firstName;

    @NotNull
    @Size(min=3, max=40, message="Last name must be between 3 and 40 characters")
    private String lastName;
    

    @NotNull
    @Min(1)
    @Max(100)
    private Integer age;

    // This will not allow the createdAt column to be updated after creation
	@Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="dojo_id")
    private Dojos dojo;

    public Ninjas() {}

    public Ninjas(
        @NotNull @Size(min=3, max=40, message="Name must be between 3 and 40 characters") String firstName,
        @NotNull @Size(min=3, max=40, message="Name must be between 3 and 40 characters") String lastName,
        @NotNull @Min(1) @Max(100) Integer age
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public Ninjas(
        @NotNull @Size(min=3, max=40, message="Name must be between 3 and 40 characters") String firstName,
        @NotNull @Size(min=3, max=40, message="Name must be between 3 and 40 characters") String lastName,
        @NotNull @Min(1) @Max(100) Integer age, Dojos dojo
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.dojo = dojo;
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Integer getAge() {
        return this.age;
    }

    public void setAge(Integer age) {
        this.age = age;
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

    public Dojos getDojo() {
        return this.dojo;
    }

    public void setDojo(Dojos dojo) {
        this.dojo = dojo;
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
