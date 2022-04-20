package com.codingdojo.plantkeeper.models;

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
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="plants")
public class Plant {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty
    @Size(min=2, message = "First name must be at least 2 characters")
    private String name;

    @NotEmpty
    @Size(min=2, message = "First name must be at least 2 characters")
    private String schedule;

    @NotEmpty
    @Size(min=2, message = "Description must be at least 2 characters")
    private String description;

    @Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public Plant() {
    }


    public Plant(Long id, String name, String schedule, String description, User user) {
        this.id = id;
        this.name = name;
        this.schedule = schedule;
        this.description = description;
        this.user = user;
    }

    public Plant(@NotEmpty @Size(min = 2, message = "First name must be at least 2 characters") String name,
                @NotEmpty @Size(min = 2, message = "First name must be at least 2 characters") String schedule,
                @NotEmpty @Size(min = 2, message = "Description must be at least 2 characters") String description,
                User user) {
        this.name = name;
        this.schedule = schedule;
        this.description = description;
        this.user = user;
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

    public String getSchedule() {
        return this.schedule;
    }

    public void setSchedule(String schedule) {
        this.schedule = schedule;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
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


