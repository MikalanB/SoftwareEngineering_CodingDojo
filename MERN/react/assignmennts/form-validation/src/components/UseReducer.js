import React, { useReducer } from 'react';

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

function reducer (state, action) {
    return {
        ...state,
        [action.type]: action.payload
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }

    return (
        <div>
            <div>
                <label>First Name: </label>{' '}
                <input type="text" name="firstName" value={state.firstName} onChange={handleChange}/>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" name="lastName" value={state.lastName} onChange={handleChange}/>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" name="email" value={state.email} onChange={handleChange}/>
            </div>
        </div>
    )
}
export default UseReducer;