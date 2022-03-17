import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const Pokemon = (props) => {
    const [imgUrl, setImgURL] = useState("");
    const {name} = useParams();

    useEffect(()=> {
        console.log("Page loaded, useEffect running")

        axios.get("https://pokeapi.co/api/v2/pokemon/" + name)
            .then(res => {
                console.log(res);
                setImgURL(res.data.sprites.front_default);
            })
            .catch(err => console.log(err));
    }, [name])
    
    return (
        <div>
            <img src={imgUrl} alt={name}/>
            <h1>Pokemon page here: {name}</h1>
        </div>
    )
}

export default Pokemon;