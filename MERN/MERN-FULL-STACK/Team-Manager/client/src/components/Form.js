import React from 'react';
import {Link} from 'react-router-dom';

const Form = (props) => {

    const {form, onSubmitProp, onChangeProp, errorProp} = props;

    return (
        <form className="mx-auto my-4 w-50" onSubmit={onSubmitProp}>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="eg. Mikalan" name="playerName" value={form.playerName} onChange={onChangeProp}/>
                <label htmlFor="floatingInput">Player Name: </label>
                {form.playerName.length === 0 ? "" : form.playerName.length < 2 ? <span className="alert-danger">Player name needs to be atleast 2 characters!</span> : ""}
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="eg. Mikalan" name="position" value={form.position} onChange={onChangeProp}/>
                <label htmlFor="floatingInput">Preferred Position: </label>
            </div>
            <div className="d-flex justify-content-center">
            <input type="submit" className="btn btn-primary btn-lg mx-3" value="Submit" />
            </div>
        </form>
    )
}

export default Form;