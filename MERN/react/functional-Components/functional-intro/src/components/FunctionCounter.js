import React, {useState} from 'react';

const FunctionCounter = (props) => { 
    const {text} = props;
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            <h1>Count: {counter}</h1>
            <button onClick={increaseCounter} className="btn btn-primary btn-lg">click me!</button>
            <p><em>This is a functional component</em></p>
            <h3>{props.text}</h3>
        </div>
    )
}

export default FunctionCounter;