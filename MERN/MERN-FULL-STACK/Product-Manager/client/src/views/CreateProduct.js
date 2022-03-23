import React, { useState } from 'react';
import axios from 'axios';

const CreateProduct = (props) => {
    const [form, setForm] = useState([]);

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        console.log("You working?")

        axios.post("http://localhost:8000/api/products/create", form)
            .then(res => {
                console.log(res)
                
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <div className="d-flex flex-column w-50 justify-content-center mx-auto">
                <form onSubmit={onSubmitHandler}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Title of Product" name="title" onChange={onChangeHandler} />
                        <label htmlFor="floatingInput">Title</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Price of Product" name="price" onChange={onChangeHandler} />
                        <label htmlFor="floatingInput">Price</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea type="text" className="form-control" id="floatingInput" placeholder="name@example.com" style={{height: "150px"}} name="description" onChange={onChangeHandler}></textarea>
                        <label htmlFor="floatingInput">Description</label>
                    </div>
                    <input type="submit" className="btn btn-secondary btn-lg" value="Create"/>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct;