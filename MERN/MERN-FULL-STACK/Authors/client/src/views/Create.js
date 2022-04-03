import React from 'react';
import { useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Create = (props) => {

    const [form, setForm] = useState({
        name: ""
    });
    const [errors, setErrors] = useState([]); 

    const history = useHistory();

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        console.log("Successful")

        axios.post("http://localhost:8000/api/authors/create", form)
            .then(res => {
                console.log(res)
                history.push("/")
            })
            .catch(err=>{
                const errorResponse = err.response.data.err.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })          
    }
    return (
        <div>
            <Form form={form} onChangeProp={onChangeHandler} onSubmitProp={onSubmitHandler} errorProp={errors}/>
        </div>
    )
}

export default Create;