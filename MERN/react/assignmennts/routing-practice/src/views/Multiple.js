import React from 'react';
import { useParams } from "react-router";

const Multiple = (props) => {
    const {word, color1, color2} = useParams();

    const isColorString = (col) => {
        if (isNaN(col)) {
            return col
        } else {
            return "black"
        }
    }

    const styling = {
        color: isColorString(color1),
        backgroundColor: isColorString(color2), 
        height: "100"
    }


    return (
        <div className="border border-dark" style={styling}>
            <h1 >The word is: {word}</h1> 
        </div>
    )
}

export default Multiple;