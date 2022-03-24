import React from 'react';
import axios from 'axios';
import {useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

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
            <br></br>
            <ul className="list-group list-group-flushs">
                <li className="list-group-item">Price: ${product.price}</li>
                <li className="list-group-item"> Description: {product.description}</li>
            </ul>

            <br></br>
            <div className="d-flex flex-column justify-content-center mx-auto w-50">
                <Link to={`/${product._id}/edit`} className="btn btn-primary btn-lg my-2">Edit {product.title}</Link>
            </div>
        </div>
    )
}

export default EachProduct;