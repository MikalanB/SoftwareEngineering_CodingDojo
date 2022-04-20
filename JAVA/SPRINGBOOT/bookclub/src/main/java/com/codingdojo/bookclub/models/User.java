package com.codingdojo.bookclub.models;

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
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="users")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotEmpty
    @Size(min=3, message = "User name must be at least 3 characters")
    private String username;

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
    private List<Book> books;

    public User() {
    }

    public User(@NotEmpty @Size(min = 3, message = "User name must be at least 3 characters") String username,
            @NotEmpty @Email(message = "Email must be valid") String email,
            @NotEmpty @Size(min = 8, max = 128, message = "Password must be between 8 and 128 characters") String password,
            @NotEmpty String confirmPassword) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    public User(@NotEmpty @Size(min = 2, message = "User name must be at least 3 characters") String username,
            @NotEmpty @Email(message = "Email must be valid") String email,
            @NotEmpty @Size(min = 8, max = 128, message = "Password must be between 8 and 128 characters") String password,
            @NotEmpty String confirmPassword, Date createdAt, Date updatedAt) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public User (@NotEmpty @Size(min = 2, message = "First name must be at least 2 characters") String username,
            @NotEmpty @Email(message = "Email must be valid") String email,
            @NotEmpty @Size(min = 8, max = 128, message = "Password must be between 8 and 128 characters") String password,
            @NotEmpty String confirmPassword, Date createdAt, Date updatedAt, List<Book> books) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.books = books;
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
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

    public List<Book> getBooks() {
        return this.books;
    }

    public void setBooks(List<Book> books) {
        this.books = books;
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
