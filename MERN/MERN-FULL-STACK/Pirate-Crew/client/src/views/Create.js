import React, {useState} from'react';
import { useEffect } from 'react';
import axios from 'axios';
import {Link, useHistory } from 'react-router-dom';
import Form from '../components/Form';

const Create = (props) => {
    const [form, setForm] = useState({
        name: "",
        imgURL: "",
        crewPosition: "Captain",
        numberOfTreasureChests: null,
        pirateCatchPhrase: "",
        pegLeg: true,
        eyePatch: true,
        hookHand: true,
    });

    const [errors, setErrors] = useState([]); 
    const history = useHistory();

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        console.log("Successful")

        axios.post("http://localhost:8000/api/pirates/create", form)
            .then(res => {
                console.log(res)
                history.push("/pirates")
            })
            .catch(err =>{
                const errorResponse = err.response.data.err.errors; 
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    return (
        <div>
            
            <div id="nav">
                <h1>Add a Pirate</h1>
                <Link to="/" className="btn btn-primary w-25 my-4">Crew Board</Link>
            </div>
            <div className="my-5">
            <Form form={form} onChangeHandlerProp={onChangeHandler} onSubmitProp={onSubmitHandler} errorProp={errors}/> 
            </div>
        </div>
    )
}

export default Create;