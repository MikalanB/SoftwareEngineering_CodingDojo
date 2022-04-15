import React from 'react';


const Form = (props) => {

    const { form, onSubmitProp, onChangeHandlerProp, errorProp } = props;
    
    return(
        <div>
            <div className="d-flex flex-column w-50 justify-content-center mx-auto">
                <form onSubmit={onSubmitProp} className="row g-3 needs-validation">
                        {errorProp.map((err, index) => 
                        <span className="alert-danger" key={index}>{err}</span>
                    )}
                    <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Name: " name="name" onChange={onChangeHandlerProp} value={form.name}/>
                        <label htmlFor="floatingInput">Name: </label>
                        {form.name.length === 0 ? "" : form.name.length < 2 ? <span className="alert-danger">Pirate name needs to be at least 2 characters!</span> : ""}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Image URL " name="imgURL" onChange={onChangeHandlerProp} value={form.imgURL}/>
                        <label htmlFor="floatingInput">Image URL: </label>
                        {form.imgURL.length === 0 ? "" : form.imgURL.length < 2 ? <span className="alert-danger">Image URL needs to be provided!!</span> : ""}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="floatingInput" placeholder="Number of Treasure Chests" name="numberOfTreasureChests" onChange={onChangeHandlerProp} value={form.numberOfTreasureChests} />
                        <label htmlFor="floatingInput">Number of Treasure Chests: </label>
                        {form.numberOfTreasureChests === 0 ? "" : form.numberOfTreasureChests < 1 ? <span className="alert-danger">Number of chests needs to be provided!</span> : ""}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Pirate Catch Phrase" name="pirateCatchPhrase" onChange={onChangeHandlerProp} value={form.pirateCatchPhrase} />
                        <label htmlFor="floatingInput">Pirate Catch Phrase: </label>
                        {form.pirateCatchPhrase.length === 0 ? "" : form.pirateCatchPhrase.length < 2 ? <span className="alert-danger">Pirate Catch Phrase needs to be longer than that!</span> : ""}
                    </div>
                    <div className="form-floating mb-3">
                    <select className="form-select" aria-label="Default select example" name="crewPosition" onChange={onChangeHandlerProp}>
                        <option disabled>Select a Crew Position</option>
                        <option >Captain</option>
                        <option>First Mate</option>
                        <option>Quarter Master</option>
                        <option>Boatswain</option>
                        <option>Powder Monkey</option>
                    </select>
                    <label htmlFor="floatingSelect">Crew Position</label>
                        {/* {form.crewPosition.length === 0 ? "" : form.crewPosition.length < 1 ? <span className="alert-danger">Crew Position needs to be provided!</span> : ""} */}
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" onChange={onChangeHandlerProp} name="pegLeg" checked={form.pegLeg}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Peg Leg</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" onChange={onChangeHandlerProp} name="eyePatch" checked={form.eyePatch}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox2">Eye Patch</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" onChange={onChangeHandlerProp} name="hookHand" checked={form.hookHand}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox2">Hook Hand</label>
                    </div>
                    <input type="submit" className="btn btn-primary btn-lg " value="Submit"/>
                </form>
            </div>
        </div>
    )
}

export default Form;