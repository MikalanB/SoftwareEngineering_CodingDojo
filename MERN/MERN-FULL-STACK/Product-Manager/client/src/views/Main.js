import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default () => {
    const [ products, setProducts ] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/all")
            .then(res=> {
                console.log(res.data)
                setProducts(res.data)
            })       
    }, []);
    return (
        <div>
            <h1>All Products</h1>
            <div className="d-flex flex-column justify-content-center">
                    {
                        products.map((item, i) => {
                            return <div key={i} className="list-group">
                                <Link to={`/product/${item._id}`} className="list-group-item list-group-item-action">{item.title}</Link>
                            </div>
                        })
                    }
            </div>
        </div>
    )
}