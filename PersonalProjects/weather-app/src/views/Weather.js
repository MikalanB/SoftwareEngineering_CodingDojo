import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Weather = (props) => {
    const [currentWeather, setCurrentWeather] = useState([]);
    
    useEffect( () => {
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=01702,us&appid=139&appid=133501b4b3e53b7f3a11bd1b23af2d26")
            .then(response => {
                console.log(response)
            })
    })

    return(
        <div>
            <h1>Hey hey</h1>
        </div>
    )
}

export default Weather;