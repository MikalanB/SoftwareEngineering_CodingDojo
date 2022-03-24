import React from 'react';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Form from '../components/Form';

const Update = (props) => {
    const {_id} = useParams();
    const [form, setForm] = useState({
        title: "",
        price: 0,
        description: "",
    });

    const history = useHistory();

    useEffect (() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                console.log(res.data)
                setForm({
                    title: res.data.title,
                    price: res.data.price,
                    description: res.data.description
                })
            })
            .catch(err => {console.log(err)});
    }, [])

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        console.log("You working?")

        axios.put(`http://localhost:8000/api/products/${_id}`, form)
            .then(res => {
                console.log(res)
                history.push("/")
            })
            .catch(err => console.error(err))
    }

    return (
        <Form form={form} onSubmitProp={onSubmitHandler} onChangeHandlerProp={onChangeHandler}/>
    )
}

export default Update;