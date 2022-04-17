package com.codingdojo.savetravels.models;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Range;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="expenses")

public class Expenses {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min=3, max=40, message="Name must be between 3 and 40 characters")
    private String name;

    @NotNull
    @Size(min=3, max=40, message="Vendor must be between 3 and 40 characters")
    private String vendor;

    @NotNull
    @Range(min=1, max=1000000, message="Amount must be atleast $1")
    private Double amount;

    @NotNull
    @Size(min=3, max=255, message="The description has to be longer than 3 characters.")
    private String description;

     // This will not allow the createdAt column to be updated after creation
	@Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;

    public Expenses() {}

    public Expenses(
    @NotNull @Size(min=3, max=40, message="Name must be between 3 and 40 characters") String name,
    @NotNull @Size(min=3, max=40, message="Vendor must be between 3 and 40 characters") String vendor,
    @NotNull @Range(min=1, max=1000000, message="Amount must be atleast $1") Double amount,
    @NotNull @Size(min=3, max=255, message="The description has to be longer than 3 characters.") String description) {
        this.name = name;
        this.vendor = vendor;
        this.amount = amount;
        this.description = description;
    }

    public Expenses(Long id, @NotNull
    @Size(min=3, max=40, message="Name must be between 3 and 40 characters") String name,
    @NotNull @Size(min=3, max=40, message="Vendor must be between 3 and 40 characters") String vendor,
    @NotNull @Range(min=1, max=1000000, message="Amount must be atleast $1") Double amount,
    @NotNull @Size(min=3, max=255, message="The description has to be longer than 3 characters.") String description,
    Date createdAt, Date updatedAt) {
        this.id = id;
        this.name = name;
        this.vendor = vendor;
        this.amount = amount;
        this.description = description;
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

    public String getVendor() {
        return this.vendor;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
    }

    public Double getAmount() {
        return this.amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
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
