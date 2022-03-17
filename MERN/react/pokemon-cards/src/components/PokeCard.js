import React, {useState, useEffect} from 'react';

const PokeCard = (props) => {

    const [defaultURL, setDefaultURL] = useState("");
    const [shinyURL, setShinyURL] = useState("");
    const [hover, setHover] = useState(false);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + props.pokemon)
        .then(res=>res.json())
        .then(res => {
            console.log(res)
            setDefaultURL(res.sprites.front_default);
            setShinyURL(res.sprites.front_shiny);
        })
        .catch(err => console.error(err))
    }, [])

    const onClickHandler = () => {
        console.log("fetch info")
    }

    const flipHover = () => setHover(!hover);

    return(
        <div>
            <img onMouseEnter={flipHover} onMouseLeave={flipHover} src={hover ? shinyURL : defaultURL} alt={props.pokemon}/>
            card here: {props.pokemon} 
            <button onClick={onClickHandler} >get image</button>
        </div>
    )
}

export default PokeCard;