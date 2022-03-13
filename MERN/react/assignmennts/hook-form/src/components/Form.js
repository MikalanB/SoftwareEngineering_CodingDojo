import React, { useState } from 'react'

const Form = (props) => { 
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const onFirstNameHandler = (event) => {
        setFirstName(event.target.value)
    }
    const onLastNameHandler = (event) => {
        setLastName(event.target.value)
    }
    const onEmailHandler = (event) => {
        setEmail(event.target.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.target.value)
    }
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.target.value)
    }

    return (
        <div>
            <form>
                <h1>This is a Traditional Form (done for practice)</h1>
                <div class="mb-3 w-50 mx-auto">
                    <label for="exampleInputEmail1" class="form-label">First Name:</label>
                    <input name="firstName" type="text" class="form-control" aria-describedby="emailHelp" onChange={onFirstNameHandler}/>
                </div>
                <div class="mb-3 w-50 mx-auto">
                    <label for="exampleInputEmail1" class="form-label">Last Name:  </label>
                    <input type="text" class="form-control" aria-describedby="emailHelp" onChange={onLastNameHandler}/>
                </div>
                <div class="mb-3 w-50 mx-auto">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" aria-describedby="emailHelp" onChange={onEmailHandler}/>
                </div>
                <div class="mb-3 w-50 mx-auto">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" onChange={onPasswordHandler}/>
                </div>
                <div class="mb-3 w-50 mx-auto">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control"  onChange={onConfirmPasswordHandler}/>
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