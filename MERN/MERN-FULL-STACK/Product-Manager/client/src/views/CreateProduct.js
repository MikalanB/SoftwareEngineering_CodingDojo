import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import Form from '../components/Form';

const CreateProduct = (props) => {

    const [form, setForm] = useState({
        title: "",
        price: 0,
        description: "",
    });

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

        axios.post("http://localhost:8000/api/products/create", form)
            .then(res => {
                console.log(res)
                history.push("/")
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <Form form={form} onSubmitProp={onSubmitHandler} onChangeHandlerProp={onChangeHandler} />
            {/* <CreateAndUpdate initialTitle="" initialPrice="" initialDescription="" onSubmitProp={createProduct}/> */}
        </div>
    )
}

export default CreateProduct;