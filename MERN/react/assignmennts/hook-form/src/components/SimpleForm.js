import Reactb, { useState } from "react"

const SimpleForm = (props) => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const onFormHandler = (event) => {
        setForm({
            ...form, // speads out all the values in the form 
            [event.target.name]: event.target.value //this says that for each value in the form, look for the name and match it to it's value
        })
    }


    return (
        <div>
            <form>
                <h1>This is a Simple Form (Top Tier Way)</h1>
                <div class="mb-3 w-50 mx-auto">
                    <label for="exampleInputEmail1" class="form-label">First Name:</label>
                    <input name="firstName" type="text" class="form-control" aria-describedby="emailHelp" onChange={onFormHandler}/>
                    {form.firstName.length < 2 ? <span className="alert-danger">You need at least 2 characters!</span> : ""}
                </div>
                <div class="mb-3 w-50 mx-auto">
                    <label for="exampleInputEmail1" class="form-label">Last Name:  </label>
                    <input name="lastName" type="text" class="form-control" aria-describedby="emailHelp" onChange={onFormHandler}/>
                    {form.lastName.length < 2 ? <span className="alert-danger">You need at least 2 characters!</span> : ""}
                </div>
                <div class="mb-3 w-50 mx-auto">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input name="email" type="email" class="form-control" aria-describedby="emailHelp" onChange={onFormHandler}/>
                    {form.email.length < 5 ? <span className="alert-danger">You need at least 5 characters!</span> : ""}
                </div>
                <div class="mb-3 w-50 mx-auto">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input name="password" type="password" class="form-control" onChange={onFormHandler}/>
                    {form.password.length < 8 ? <span className="alert-danger">You need at least 8 characters!</span> : ""}
                </div>
                <div class="mb-3 w-50 mx-auto">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input name="confirmPassword" type="password" class="form-control"  onChange={onFormHandler}/>
                    {form.confirmPassword.length < 8 ? <span className="alert-danger">You need at least 8 characters!</span> : ""}
                    {form.confirmPassword != form.password ? <span className="alert-danger">Passwords do not match!</span> : ""}
                </div>
                <input type="submit" class="btn btn-primary" value="Submit"/>
            </form>

            <br></br>
            <h4>Your Form Details:</h4>
            <p>First Name: {form.firstName}</p>
            <p>Last Name: {form.lastName}</p>
            <p>Email: {form.email}</p>
            <p>Password: {form.password}</p>
            <p>Confirm Password: {form.confirmPassword}</p>
        </div>
    )
}

export default SimpleForm;
