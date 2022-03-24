import React, { useState } from 'react';
import axios from 'axios';


const Form = (props) => {

    const { form, onSubmitProp, onChangeHandlerProp } = props;
    
    return(
        <div>
            <h1>Product Manager</h1>
            <div className="d-flex flex-column w-50 justify-content-center mx-auto">
                <form onSubmit={onSubmitProp} className="row g-3 needs-validation">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Title of Product" name="title" onChange={onChangeHandlerProp} value={form.title} />
                        <label htmlFor="floatingInput">Title</label>
                        {form.title.length === 0 ? "" : form.title.length < 3 ? <span className="alert-danger">Title needs at least 3 characters!</span> : ""}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Price of Product" name="price" onChange={onChangeHandlerProp} value={form.price} />
                        <label htmlFor="floatingInput">Price</label>
                        {form.price === 0 ? "" : form.price < 1 ? <span className="alert-danger">Price needs to be at least $1!</span> : ""}
                    </div>
                    <div className="form-floating mb-3">
                        <textarea type="text" className="form-control" id="floatingInput" placeholder="name@example.com" style={{height: "150px"}} name="description" onChange={onChangeHandlerProp} value={form.description} ></textarea>
                        <label htmlFor="floatingInput">Description</label>
                        {form.description.length === 0 ? "" : form.description.length < 10 ? <span className="alert-danger">Description needs at least 10 characters!</span> : ""}
                    </div>
                    <input type="submit" className="btn btn-primary btn-lg " value="Submit"/>
                </form>
            </div>
        </div>
    )
}

export default Form;