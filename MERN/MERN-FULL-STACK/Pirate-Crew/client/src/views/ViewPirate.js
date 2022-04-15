import React from 'react';
import axios from 'axios';
import {useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';

const ViewPirate = (props) => {
    const {_id} = useParams();
    const [pirate, setPirate] = useState([])
    const history = useHistory();

    useEffect (() => {
        axios.get(`http://localhost:8000/api/pirates/${_id}`)
            .then(res => {
                console.log(res.data)
                setPirate(res.data)
            })
            .catch(err => {console.log(err)});
    }, [])

    // const check = (string) => {
    //     return string === "yes" ? true : false
    // }
    // const updateHandler = (_id, option, string) => {
    //         console.log("updating")

            
    //         let pirateToUpdate = pirate._id
    //         if (option === "pegLeg") {
    //             pirateToUpdate.pegLeg = check(string)
    //         } else if (option === "eyePatch") {
    //             pirateToUpdate.eyePatch = check(string)
    //         } else {
    //             pirateToUpdate.hookHand = check(string)
    //         }

    //         runUpdate(_id, pirateToUpdate)
    //     }

    // const runUpdate = (_id, pirate) => {
    //     axios.put(`http://localhost:8000/api/teams/${_id}`, pirate)
    //     .then(res => {
    //         console.log(res)
    //         history.push("/pirate/" + _id)
    //     })
    //     .catch(err => console.error(err))
    // }

    return(
        <div>
            <div id="nav">
                <h1>{pirate.name}</h1>
                <Link to="/" className="btn btn-primary w-25 my-4">Crew Board</Link>
            </div>
            <div className="d-flex justify-content-evenly my-5">
                <div>
                    <img src={pirate.imgURL} alt={pirate.name} id="image"/>
                    <h1>{`${pirate.pirateCatchPhrase}`}</h1>
                </div>

                <div className="about">
                    <h1>About</h1>
                    <table className="table table-light table-bordered table-active ">
                        <tbody>
                            <tr>
                                <th>Position: </th>
                                <td>{pirate.crewPosition}</td>
                            </tr>
                            <tr>
                                <th>Treasures: </th>
                                <td>{pirate.numberOfTreasureChests}</td>
                            </tr>
                            <tr>
                                <th>Peg Leg: </th>
                                <td>
                                    {pirate.pegLeg ? 
                                    <span className="d-flex justify-content-around">
                                        <p>Yes</p>
                                        <button className="btn btn-danger w-25">No</button>
                                    </span>
                                    : <span className="d-flex justify-content-around">
                                        <p>No</p>
                                        <button className="btn btn-success w-25">Yes</button>
                                    </span>
                                    }
                                </td>
                            </tr>
                            <tr>
                                <th>Eye Patch: </th>
                                <td>
                                    <div>
                                    {pirate.eyePatch ? 
                                    <span className="d-flex justify-content-around">
                                        <p>Yes</p>
                                        <button className="btn btn-danger w-25" >No</button>
                                    </span>
                                    : <span className="d-flex justify-content-around">
                                        <p>No</p>
                                        <button className="btn btn-success w-25">Yes</button>
                                    </span>
                                    }
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>Hook Hand: </th>
                                <td>
                                    {pirate.hookHand ? 
                                    <span className="d-flex justify-content-around">
                                        <p>Yes</p>
                                        <button className="btn btn-danger w-25">No</button>
                                    </span>
                                    : <span className="d-flex justify-content-around">
                                        <p>No</p>
                                        <button className="btn btn-success w-25">Yes</button>
                                    </span>
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewPirate;