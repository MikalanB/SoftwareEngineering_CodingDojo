import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {ListItemButton, ListItemText} from '@mui/material';

const Starships = (props) => {
    const [starship, setStarship] = useState("")
    const {id} = useParams();

    useEffect (() => {
        console.log("I'm working")
        
        axios.get("https://swapi.dev/api/starships/" + id)
            .then(response => {
                console.log(response.data)
                setStarship(response.data);
            })
            .catch(err => console.log(err));
    }, [id])
    
    return (
        <div className="d-flex flex-column w-50 justify-content-center align-middle" style={{marginTop: "50px"}}>
            <h1> {starship.name}</h1>
            {/* <ListItemButton component="a" href="#simple-list">
                <ListItemText primary= {people.name} />
            </ListItemButton> */}
            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Model: " />
                <ListItemText primary= {starship.model} />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Manufacturer: " />
                <ListItemText primary= {starship.manufacturer} />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Starship Class: " />
                <ListItemText primary= {starship.starship_class} />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Consumables: " />
                <ListItemText primary= {starship.consumables} />
            </ListItemButton>
        </div>
    )
}

export default Starships;