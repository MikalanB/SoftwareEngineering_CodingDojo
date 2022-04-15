import React from 'react';

const SundaeBox = (props) => {
    return (
        <div>
            <h2>{props.sundae.name}</h2>
            <h3>flavor: {props.sundae.flavor}</h3>
            <h3>scoops: {props.sundae.numscoops}</h3>
            <h3>toppings: {props.sundae.toppings.join(", ")}</h3>
            <h3>whipped cream? {props.sundae.whipped ? "heck yeah!" : "boo this sucks!"}</h3>
        </div>
    )
}

export default SundaeBox;
