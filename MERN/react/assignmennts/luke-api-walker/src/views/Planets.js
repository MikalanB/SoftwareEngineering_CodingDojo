import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {ListItemButton, ListItemText} from '@mui/material';

const Planets = (props) => {
    const [planet, setPlanet] = useState("")
    const {id} = useParams();

    useEffect (() => {
        console.log("I'm working")
        
        axios.get("https://swapi.dev/api/planets/" + id)
            .then(response => {
                console.log(response.data)
                setPlanet(response.data);
            })
            .catch(err => console.log(err));
    }, [id])
    
    return (
        <div className="d-flex flex-column w-25 justify-content-center align-middle" style={{marginTop: "50px"}}>
            <h1> {planet.name}</h1>
            {/* <ListItemButton component="a" href="#simple-list">
                <ListItemText primary= {people.name} />
            </ListItemButton> */}
            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Climate: " />
                <ListItemText primary= {planet.climate} />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="terrain: " />
                <ListItemText primary= {planet.terrain} />
            </ListItemButton>
            { planet.surface_water == 1 
            ? <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Surface Water: " />
                <ListItemText primary= "True" />
            </ListItemButton>
            : <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Surface Water: " />
                <ListItemText primary= "False" />
            </ListItemButton>
            }
            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="skin_color: " />
                <ListItemText primary= {planet.population} />
            </ListItemButton>
        </div>
    )
}

export default Planets;