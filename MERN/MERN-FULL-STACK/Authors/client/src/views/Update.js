import React, {useState, useEffect} from 'react';
import Form from '../components/Form';
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';

const Update = (props) => {

    const {_id} = useParams();
    const [form, setForm] = useState({
        name: ""
    });

    const history = useHistory();

    useEffect (() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res => {
                console.log(res.data)
                setForm({
                    name: res.data.name,
                })
            })
    }, [])

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        console.log("Successful update!")

        axios.put(`http://localhost:8000/api/authors/${_id}`, form)
            .then( res => {
                console.log(res)
                history.push("/")
            })
            .catch(err => console.error(err))
    }

    
    return(
        <div>
            <p>Edit this Author</p>
            <Form onChangeProp={onChangeHandler} form={form} onSubmitProp={onSubmitHandler}/>
        </div>
    )
}

export default Update;