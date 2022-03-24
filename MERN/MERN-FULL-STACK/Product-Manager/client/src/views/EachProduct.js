import React from 'react';
import axios from 'axios';
import {useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EachProduct = (props) => {
    const {_id} = useParams();
    const [product, setProduct] = useState([])

    useEffect (() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch(err => {console.log(err)});
    }, [])
    return(
        <div>
            <h1> {product.title} Product Info</h1>

            <ul class="list-group list-group-flush">
                <li class="list-group-item">Price: ${product.price}</li>
                <li class="list-group-item"> Description: {product.description}</li>
            </ul>
        </div>
    )
}

export default EachProduct;