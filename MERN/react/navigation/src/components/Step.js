import React from 'react';

const Step = (props) => {
    return(
        <div onClick={props.onDelete} className="step">
            <span className="direction">
                {
                    props.direction === "right"
                    ? <span className="direction"> ➡ </span>
                    : props.direction === "left"
                    ? <span className="direction"> ⬅  </span>
                    : <span className="direction"> ⬆ </span>
                }
            </span>   
            
            <h1>{props.instructions}</h1>
            <h2>{props.distance} miles</h2>

            {/* instruction: {props.instruction}
            diection: {props.direction}
            distance: {props.distance} */}
        </div>
    )
}

export default Step;