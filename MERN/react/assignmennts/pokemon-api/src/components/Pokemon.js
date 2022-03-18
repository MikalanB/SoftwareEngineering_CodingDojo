import React from 'react';
import { useState, useEffect} from 'react';
const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([])

    const fetchInfo = (event) => {
        event.preventDefault();

        fetch("https://pokeapi.co/api/v2/pokemon/?limit=1126")
                .then(res => res.json())
                .then(res => {
                    // const arr =  [];
                    // for (let i = 0; i <= res.results.length-1; i++) {
                    //     console.log(res.results[i].name)
                    //     arr.push(res.results[i].name)
                    // }
                    setPokemon(res.results)
                    
                })
                .catch(err => console.error(err))
            }
    return (
        <div>
            <button onClick={fetchInfo} className="btn btn-primary btn-lg">Fetch Pokemon</button>
            <br></br>
        <div>
            <ul>
                {
            pokemon.map((item, i) => {
                return <li key={i}>{item.name}</li>
            })
            }
            </ul>
        </div>
    </div>
)}

export default Pokemon;