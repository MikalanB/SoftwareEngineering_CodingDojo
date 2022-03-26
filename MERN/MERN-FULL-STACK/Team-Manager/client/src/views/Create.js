import React, {useState} from 'react';
import Form from '../components/Form';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

const Create = (props) => {
    const [form, setForm] = useState({
        playerName: "",
        position: "",
    });

    const history = useHistory();

    const onChangeHandler = (event) => {
        // if(event.target.name === "position" && event.target.value === "") {
        //     event.target.value = "Unassigned"
        // }
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        console.log("Successful")

        axios.post("http://localhost:8000/api/teams/create", form)
            .then(res => {
                console.log(res)
                history.push("/")
            })
            .catch(err => console.error(err))
    }

    return(
        <div>
            <div className="d-flex justify-content-around my-3">
                <Link to={`/players/list`} className="btn btn-outline-primary w-25">List</Link>
                <Link to={`/create`} className="btn btn-outline-primary w-25">Add a Player</Link>
            </div>

            <Form form={form} onChangeProp={onChangeHandler} onSubmitProp={onSubmitHandler}/> 
        </div>
    )
}

export default Create;