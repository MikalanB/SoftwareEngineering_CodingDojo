import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1126')
            .then (response => {setPokemon(response.data.results)})
            .catch(err => console.error(err))
    }, []);

    return (
        <div>
            <ul>
                {
                    pokemon.map((item, i) => {
                        return <li key={i}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Pokemon;