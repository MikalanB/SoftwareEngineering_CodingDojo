import React, { useState } from 'react';


const RegisterForm = (props) => {

    const { form, onSubmitProp, onChangeHandlerProp } = props;
    
    return(
        <div>
            <h1>Create account </h1>
            <div className="d-flex flex-column w-75 justify-content-center mx-auto">
                <form onSubmit={onSubmitProp} className="row g-3 needs-validation">
                    <div className="mb-3          ">
                        <label htmlFor="floatingInput">First Name</label>
                        <input type="text" className="form-control" id="floatingInput" placeholder="First Name" name="firstName" onChange={onChangeHandlerProp} value={form.firstName} />
                        {form.firstName.length === 0 ? "" : form.firstName < 2 ? <span className="alert-danger">First name must be at least 2 characters</span> : ""}
                    </div>
                    <div className=" mb-3">
                        <label htmlFor="floatingInput">Last Name</label>
                        <input type="text" className="form-control" id="floatingInput" placeholder="Last name" name="lastName" onChange={onChangeHandlerProp} value={form.lastName} />
                        {form.lastName.length === 0 ? "" : form.lastName < 2 ? <span className="alert-danger">Last name must be at least 2 characters</span> : ""}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="floatingInput">Email</label>
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={onChangeHandlerProp} value={form.email} />
                        {form.email.length === 0 ? "" : form.email.length < 5 ? <span className="alert-danger">Email needs at least 5 characters!</span> : ""}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="floatingInput">Phone Number</label>
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="phoneNumber" onChange={onChangeHandlerProp} value={form.phoneNumber} />
                        {form.phoneNumber.length === 0 ? "" : form.phoneNumber.length < 5 ? <span className="alert-danger">Email needs at least 5 characters!</span> : ""}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="floatingInput">Password</label>
                        <input type="password" className="form-control" id="floatingInput" placeholder="name@example.com" name="password" onChange={onChangeHandlerProp} value={form.password} />
                        {form.password.length === 0 ? "" : form.password.length < 5 ? <span className="alert-danger">Password needs at least 6 characters!</span> : ""}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="floatingInput">Confirm Password</label>
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="confirmPassword" onChange={onChangeHandlerProp} value={form.confirmPassword} />
                        {form.confirmPassword.length === 0 ? "" : form.confirmPassword.length < 5 ? <span className="alert-danger">Password needs at least 5 characters!</span> : ""}
                    </div>

                    <input type="submit" className="btn btn-primary btn-lg " value="Submit"/>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm;