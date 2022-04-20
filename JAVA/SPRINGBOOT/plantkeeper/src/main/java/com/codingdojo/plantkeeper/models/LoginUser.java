package com.codingdojo.plantkeeper.models;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

// this does not require an entity as it is not being saved to db!!!
public class LoginUser {
    
    @NotEmpty(message = "Email is required")
    @Email(message = "Email must be valid")
    private String email;

    @NotEmpty(message = "Password cannot be empty")
    @Size(min=8, max=128, message = "Password must be between 8 and 128 characters") 
    private String password;
    

    public LoginUser() {}


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

}
