package com.example.candyapp.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "owners")
public class Owner {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 3, max = 35, message="The first name must be no less than 3 characters and no more than 35 characters")
    private String firstName;

    @NotNull
    @Size(min = 3, max = 35, message="The last name must be no less than 3 characters and no more than 35 characters")
    private String lastName;

    // creates one to many relationship with candy class
    @OneToMany(mappedBy="dojo", fetch = FetchType.LAZY)
    private List<Candy> candy;

    
    @Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    
    
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;

    public Owner() {
        super();
    }

    public Owner(String firstName, String lastName) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
    }
    

    public Owner(Long id, @NotNull @Size(min = 3, max = 35, message="The first name must be no less than 3 characters and no more than 35 characters") String firstName, 
    @NotNull @Size(min = 3, max = 35, message="The last name must be no less than 3 characters and no more than 35 characters") String lastName, List<Candy> candy, Date createdAt, Date updatedAt) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.candy = candy;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
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

    public List<Candy> getCandy() {
        return this.candy;
    }

    public void setCandy(List<Candy> candy) {
        this.candy = candy;
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


    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
	
	
	@PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    } 


}
