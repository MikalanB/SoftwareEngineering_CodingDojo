import React from 'react';
import { useState, useHistory } from 'react';
import axios from 'axios';

const CreateSundae = (props) => {
    const [form, setForm] = useState({
        name: "",
        flavor: "",
        whipped: false,
        numScoops: null
    })

    //const history = useHistory()

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }
    
    const [error, setError] = useState({})
    const onSubmitHandler = (event) => {
        event.preventDefault();

        //if you have multiple states create one object and add each state to the object to send everything

        axios.post("http://localhost:8000/api/sundae/create", form)
        .then(res => {
            console.log(res)
            //history.push("/")
        })
        .catch(err => {
            console.log(err.response.data.err.errors)
            setError(err.response.data.err.errors)

        })
    }

    return(
        <div className="w-75 mx-auto my-4">
            <h1>Create a Sundae</h1>
            <form className="w-50"  onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" className="form-control" onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="flavor">Flavor: </label>
                    <input type="text" name="flavor" className="form-control" onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <input type="checkbox" name="whipped" className="form-control" onChange={onChangeHandler}/>
                    <label htmlFor="name">Whipped? </label>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Number of Scoops: </label>
                    <input type="number" name="numscoops" className="form-control" onChange={onChangeHandler}/>
                </div>

                <input type="submit" className="btn btn-primary btn-lg"/>
            </form>
        </div>
    )
}

export default CreateSundae;