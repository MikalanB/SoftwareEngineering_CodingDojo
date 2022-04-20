package com.codingdojo.plantkeeper.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotEmpty
    @Size(min=2, message = "First name must be at least 2 characters")
    private String firstName;

    @NotEmpty
    @Size(min=2, message = "Last name must be at least 2 characters")   
    private String lastName;

    @NotEmpty
    @Email(message = "Email must be valid")
    private String email;

    @NotEmpty(message = "Password cannot be empty")
    @Size(min=8, max=128, message = "Password must be between 8 and 128 characters") 
    private String password;

    @Transient
    @NotEmpty(message = "Confirm password is required")
    @Size(min=8, max=128, message = "Password must be between 8 and 128 characters")
    private String confirmPassword;

      // This will not allow the createdAt column to be updated after creation
	@Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;

    @OneToMany(mappedBy="user", fetch = FetchType.LAZY)
    private List<Plant> plants;

    @ManyToMany(mappedBy = "user", fetch = FetchType.LAZY)
    @JoinTable(
        name = "join_table",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "plant_id")
    )
    private List<Plant> manyPlants;

    public User() {
    }

    public User(@NotEmpty @Size(min = 2, message = "First name must be at least 2 characters") String firstName,
            @NotEmpty @Size(min = 2, message = "Last name must be at least 2 characters") String lastName,
            @NotEmpty @Email(message = "Email must be valid") String email,
            @NotEmpty @Size(min = 8, max = 128, message = "Password must be between 8 and 128 characters") String password,
            @NotEmpty String confirmPassword) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    public User(@NotEmpty @Size(min = 2, message = "First name must be at least 2 characters") String firstName,
            @NotEmpty @Size(min = 2, message = "Last name must be at least 2 characters") String lastName,
            @NotEmpty @Email(message = "Email must be valid") String email,
            @NotEmpty @Size(min = 8, max = 128, message = "Password must be between 8 and 128 characters") String password,
            @NotEmpty String confirmPassword, Date createdAt, Date updatedAt) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public User (@NotEmpty @Size(min = 2, message = "First name must be at least 2 characters") String firstName,
            @NotEmpty @Size(min = 2, message = "Last name must be at least 2 characters") String lastName,
            @NotEmpty @Email(message = "Email must be valid") String email,
            @NotEmpty @Size(min = 8, max = 128, message = "Password must be between 8 and 128 characters") String password,
            @NotEmpty String confirmPassword, Date createdAt, Date updatedAt, List<Plant> plants) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.plants = plants;
    }



    //need to add one to many with palnts
    // remember to update getters and setters


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

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return this.confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
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
