import React from 'react';
import axios from 'axios';
import {useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import '../css/ViewProduct.css'

const ViewProduct = (props) => {
    const {_id} = useParams();
    const [product, setProduct] = useState([])

    useEffect (() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                console.log(res.data.productImgURL[0].split(','))
                setProduct(res.data)
            })
            .catch(err => {console.log(err)});
    }, [])

    const obj = (arr) => {
        arr[0].split(',')
        console.log(arr)
    }



    return(
        <div className="wrapper">
            <div className="container-1">
            <ImageList sx={{ width: 250, height: 650 }} cols={1} rowHeight={164}>
            {
                product.productImgURL[0].split(',').map((prod, i) => {
                    return <ImageListItem key={i}>
                            <img
                        src={`${prod}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${prod}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={product.title}
                        loading="lazy"
                        />
                        </ImageListItem>
                        // <img src={prod} alt={product.title} />
                    
                })
            }
            {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {product.imgURL.map((item) => (
                    <ImageListItem key={item.img}>
                    <img
                        src={`${item}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
                </ImageList> */}
            </ImageList>
            </div>
            <div className="container-2">
                {product.title}
                ${product.price}
            </div>
            <div className="container-3"></div>
        </div>
    )
}

export default ViewProduct;