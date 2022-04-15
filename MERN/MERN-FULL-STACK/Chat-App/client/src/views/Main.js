import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

const Main = (props) => {
    const [form, setForm] = useState({
        name: ""
    });

    const history = useHistory();

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        console.log("Successful")
        
        history.push("/chat/" + form.name)
            .catch(err => console.error(err))
    }

    return (
        <div>
            <h1>MERN Chat</h1>
            <div>
                <h2>Get started right now!</h2>
                <div>
                <h4>I want to start chatting with the name... </h4>
                <form className="my-4" onSubmit={onSubmitHandler}>
                    <div className="form-floating mb-3 w-50 mx-auto ">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="name" onChange={onChangeHandler}/>
                        <label htmlFor="floatingInput">Name</label>
                    </div>
                    <input type="submit" value="Start Chatting" className="btn btn-success btn-lg" />
                </form>
                </div>
            </div>
        </div>
    )
}

export default Main;