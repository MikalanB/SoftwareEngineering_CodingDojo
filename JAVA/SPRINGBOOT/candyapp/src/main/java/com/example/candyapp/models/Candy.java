package com.example.candyapp.models;

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

import org.hibernate.validator.constraints.Range;
import org.springframework.format.annotation.DateTimeFormat;


@Entity
@Table(name = "candys")
public class Candy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 3, max = 35)
    private String name;

    @NotNull
    @Size(min = 3, max = 15)
    private String brand;

    @NotNull
    @Range(min = 1, max = 10)
    private int rating;


    @NotNull
    @Range(min = 1, max = 10)
    private int price;

    	// This will not allow the createdAt column to be updated after creation
	@Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    
    
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;

    // creates many to one relationship with owner class
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="owner_id")
    private Owner owner;
    
	

    public Candy() {
    }
    
    

    public Candy(Long id, @NotNull @Size(min = 3, max = 30) String name, @NotNull @Size(min = 3, max = 15) String brand,
    @NotNull @Range(min = 1, max = 10) Integer rating, @NotNull @Range(min = 1, max = 10) Integer price, Date createdAt,
    Date updatedAt, Owner owner) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.rating = rating;
        this.price = price;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.owner = owner;
    }
    
	public Candy(@NotNull @Size(min = 3, max = 30) String name, @NotNull @Size(min = 3, max = 15) String brand,
			@NotNull @Range(min = 1, max = 10) Integer rating, @NotNull @Range(min = 1, max = 10) Integer price) {
		this.name = name;
		this.brand = brand;
		this.rating = rating;
		this.price = price;
	}




	public Candy(Long id, @NotNull @Size(min = 3, max = 30) String name, @NotNull @Size(min = 3, max = 15) String brand,
			@NotNull @Range(min = 1, max = 10) Integer rating, @NotNull @Range(min = 1, max = 10) Integer price, Date createdAt,
			Date updatedAt) {
		super();
		this.id = id;
		this.name = name;
		this.brand = brand;
		this.rating = rating;
		this.price = price;
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

    public String getBrand() {
        return this.brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public int getRating() {
        return this.rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public int getPrice() {
        return this.price;
    }

    public void setPrice(int price) {
        this.price = price;
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

    public Owner getOwner() {
        return this.owner;
    }

    public void setOwner(Owner owner) {
        this.owner = owner;
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

