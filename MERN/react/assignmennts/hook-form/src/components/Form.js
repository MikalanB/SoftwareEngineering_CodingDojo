import React, { useState } from 'react'

const Form = (props) => { 
    const [firstName, setFirstName] = useState("")
    const [errorFirstName, setErrorFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [errorLastName, setErrorLastName] = useState("")
    const [email, setEmail] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("")
    // const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = { username, email, password };
    //     console.log("Welcome", newUser);
    //     setHasBeenSubmitted( true );
    // };

    const onFirstNameHandler = (event) => {
        setFirstName(event.target.value)

        if (event.target.value.length < 2) {
            setErrorFirstName("First name must be at least 2 characters")
        } else {
            setErrorFirstName("")
        }
    }

    const onLastNameHandler = (event) => {
        setLastName(event.target.value)

        if (event.target.value.length < 2) {
            setErrorLastName("First name must be at least 2 characters")
        } else {
            setErrorLastName("")
        }
    }
    const onEmailHandler = (event) => {
        setEmail(event.target.value)

        if (event.target.value.length < 5) {
            setErrorEmail("Email must be at least 5 characters")
        } else {
            setErrorEmail("")
        }
    }
    const onPasswordHandler = (event) => {
        setPassword(event.target.value)

        if (event.target.value.length < 8) {
            setErrorPassword("Password must be at least 8 characters")
        } else {
            setErrorPassword("")
        }
    }
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.target.value)

        if (event.target.value.length < 8) {
            setErrorLastName("Password must be at least 8 characters and match the password above")
        } else if (event.target.value != {password}) {
            setErrorLastName("Password is not matching the password above")
        } else {
            setErrorLastName("")
        }
    }

    return (
        <div>
            <form>
                <h1>This is a Traditional Form (done for practice)</h1>
                <div class="mb-3 w-50 mx-auto">
                    <label for="exampleInputEmail1" class="form-label">First Name:</label>
                    <input name="firstName" type="text" class="form-control" aria-describedby="emailHelp" onChange={onFirstNameHandler}/>
                    <span className="alert-danger">{errorFirstName}</span>
                </div>
                <div class="mb-3 w-50 mx-auto">
                    <label for="exampleInputEmail1" class="form-label">Last Name:  </label>
                    <input type="text" class="form-control" aria-describedby="emailHelp" onChange={onLastNameHandler}/>
                    <span className="alert-danger">{errorLastName}</span>
                </div>
                <div class="mb-3 w-50 mx-auto">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" aria-describedby="emailHelp" onChange={onEmailHandler}/>
                    <span className="alert-danger">{errorEmail}</span>
                </div>
                <div class="mb-3 w-50 mx-auto">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" onChange={onPasswordHandler}/>
                    <span className="alert-danger">{errorPassword}</span>
                </div>
                <div class="mb-3 w-50 mx-auto">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control"  onChange={onConfirmPasswordHandler}/>
                    <span className="alert-danger">{errorConfirmPassword}</span>
                </div>
                <input type="submit" class="btn btn-primary" value="Submit"/>
            </form>
            <br></br>
            <h4>Your Form Details:</h4>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    )
}

export default Form;