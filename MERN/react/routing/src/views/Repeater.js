import React from 'react';
import {useParams} from 'react-router-dom';

const Repeater = (props) => {
    const {word, number} = useParams();

    return (
        <div>
            <h1><marquee>{word}</marquee></h1>
            <h1><marquee>{word}</marquee></h1>
            <h1><marquee>{word}</marquee></h1>
            <h1><marquee>{word}</marquee></h1>
            <h1><marquee>{word}</marquee></h1>
        </div>
    )
}

export default Repeater;