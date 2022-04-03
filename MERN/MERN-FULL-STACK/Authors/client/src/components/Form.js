import React from 'react';
import {Link} from 'react-router-dom';

const Form = (props) => {

    const {form, onSubmitProp, onChangeProp, errorProp} = props;

    return (
        <form className="mx-auto my-4 w-50" onSubmit={onSubmitProp}>
            {errorProp.map((err, index) => 
                <p key={index}>{err}</p>
            )}
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="eg. Mikalan" name="name" value={form.name} onChange={onChangeProp}/>
                <label htmlFor="floatingInput">Name: </label>
            </div>
            <div className="d-flex justify-content-center">
            <Link to="/" className="btn btn-primary btn-lg mx-3">Cancel</Link>
            <input type="submit" className="btn btn-primary btn-lg mx-3" value="Submit" />
            </div>
        </form>
    )
}

export default Form;