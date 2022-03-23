import React, { useEffect, useState } from 'react'
import axios from 'axios';

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
                <ul className="list-group list-group-flush w-50 d-flex flex-column">
                    {
                        products.map((item, i) => {
                            return <div key={i}>
                                <li className="list-group-item">{item.title}</li>
                                <li className="list-group-item">Price: ${item.price}</li>
                                <li className="list-group-item">{item.description}</li>
                            </div>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}