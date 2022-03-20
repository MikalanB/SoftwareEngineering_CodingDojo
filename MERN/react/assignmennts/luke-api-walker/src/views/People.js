import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {ListItemButton, ListItemText} from '@mui/material';

const People = (props) => {
    const [people, setPeople] = useState([])
    const [homePlanet, setHomePlanet] = useState([])
        const {id} = useParams();

    useEffect (() => {
        console.log("I'm working")
        
        axios.get("https://swapi.dev/api/people/" + id)
            .then(response => {
                console.log(response.data)
                setPeople(response.data);
                console.log(response.data.homeworld)
            })
            .catch(err => console.log(err));
    }, [id])

    useEffect (() => {
        axios.get(people.homeworld)
            .then(response => {
                console.log(response.data)
                setHomePlanet(response.data)
            })
    })


    return (
        <div className="d-flex flex-column w-25 justify-content-center align-middle" style={{marginTop: "50px"}}>
            <h1> {people.name}</h1>
            {/* <ListItemButton component="a" href="#simple-list">
                <ListItemText primary= {people.name} />
            </ListItemButton> */}
            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Height: " />
                <ListItemText primary= {people.height} />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Mass: " />
                <ListItemText primary= {people.mass} />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Hair Color: " />
                <ListItemText primary= {people.hair_color} />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Skin Color: " />
                <ListItemText primary= {people.skin_color} />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Home World: " />
                <ListItemText primary= {homePlanet.name} />
            </ListItemButton>
            <ListItemButton component="a" href={people.homeworld}>
                <ListItemText primary="Link to Home World: " />
                <ListItemText primary= {people.homeworld} />
            </ListItemButton>
        </div>
    )
}

export default People;