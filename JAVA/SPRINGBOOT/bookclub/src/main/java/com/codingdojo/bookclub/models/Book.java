package com.codingdojo.bookclub.models;

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
@Table(name = "books")
public class Book {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message="Title cannot be blank")
    @Size(min=3, message="Title must be at least 3 characters")
    private String title;

    @NotEmpty(message="Author cannot be blank")
    @Size(min=3, message="Author must be at least 3 characters")
    private String author;

    @NotEmpty(message="Thoughts cannot be blank")
    @Size(min=3, message="Thoughts must be at least 3 characters")
    private String thoughts;

    // This will not allow the createdAt column to be updated after creation
	@Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User user;

    public Book() {
    }

    public Book(@NotEmpty @Size(min = 3, message = "Title must be at least 3 characters") String title,
                @NotEmpty @Size(min = 3, message = "Author must be at least 3 characters") String author,
                @NotEmpty @Size(min = 3, message = "Thoughts must be at least 3 characters") String thoughts,
                User user) {
        this.title = title;
        this.author = author;
        this.thoughts = thoughts;
        this.user = user;
    }

    public Book(@NotEmpty @Size(min = 3, message = "Title must be at least 3 characters") String title,
                @NotEmpty @Size(min = 3, message = "Author must be at least 3 characters") String author,
                @NotEmpty @Size(min = 3, message = "Thoughts must be at least 3 characters") String thoughts) {
        this.title = title;
        this.author = author;
        this.thoughts = thoughts;
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return this.author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getThoughts() {
        return this.thoughts;
    }

    public void setThoughts(String thoughts) {
        this.thoughts = thoughts;
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
