import React, { useState } from 'react'

const BigInversion = (props) => {

    const [age, setAge] = useState(props.age)
    const increaseAge = () => {
        setAge(age + 1)
    }
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={increaseAge} className="btn btn-primary btn-lg">Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}

export default BigInversion;