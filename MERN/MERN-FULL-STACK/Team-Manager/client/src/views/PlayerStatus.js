import React, {useState} from'react';
import { useEffect } from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';

const PlayerStatus = (props) => {

    const [players, setPlayers] = useState([])

    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/teams/all")
        .then (res => {
            console.log(res.data)
            setPlayers(res.data)
        })
        .catch (err => console.log(err))
    }, [])

    const updateHandler = (_id, string, arrIndex) => {
        console.log("updating")

        let playerToUpdate = players[arrIndex];

        playerToUpdate.playerStatus = string;

        setPlayers([...players.slice(0, arrIndex), playerToUpdate, ...players.slice(arrIndex+1)])

        // axios.get(`http://localhost:8000/api/teams/${_id}`)
        // .then(res => {
        //     console.log(res.data)
        //     setForm({
        //         playerName: res.data.playerName,
        //         position: res.data.position,
        //         playerStatus: string,
        //         GameSeries: res.data.GameSeries
        //     })
        // })
        runUpdate(_id, playerToUpdate)
    }

    const runUpdate = (_id, player) => {
        axios.put(`http://localhost:8000/api/teams/${_id}`, player)
        .then(res => {
            console.log(res)
            history.push("/status/game/1")
        })
        .catch(err => console.error(err))
    }

    return (
        <div>
            <div className="d-flex justify-content-around my-3">
                <Link to="/status/game/1" className="btn btn-outline-primary w-25">Game 1</Link>
                <Link to="/status/game/2" className="btn btn-outline-primary w-25">Game 2</Link>
                <Link to="/status/game/3" className="btn btn-outline-primary w-25">Game 3</Link>
            </div>
            <div className="d-flex justify-content-center">
                <table className="table table-hover table-striped w-75">
                    <thead>
                        <tr>
                        <th scope="col">Player Name</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            players.map((item, i) => {
                                return (
                                <tr key={i}>
                                    <td><Link to={`/edit/${item._id}`}>{item.playerName}</Link></td>
                                    <td>
                                        <div>
                                            {item.playerStatus === "Undecided" ? <span className="d-flex justify-content-around w-75">
                                            <button className="btn btn-secondary w-25" onClick={() => updateHandler(item._id, "Playing", i)}>Playing</button>
                                            <button className="btn btn-secondary w-25" onClick={() => updateHandler(item._id, "Not playing", i)}>Not Playing</button>
                                            <button className="btn w-25" onClick={() => updateHandler(item._id, "Undecided", i)}  value={item.playerStatus} style={{backgroundColor: "yellow"}}>{item.playerStatus}</button>
                                            </span>
                                        : item.playerStatus === "Playing" ? <span className="d-flex justify-content-around w-75">
                                        <button className="btn w-25" onClick={() => updateHandler(item._id, "Playing", i)}  value={item.playerStatus} style={{backgroundColor: "green"}}>{item.playerStatus}</button>
                                        <button className="btn btn-secondary w-25" onClick={() => updateHandler(item._id, "Not playing", i)}>Playing</button>
                                        <button className="btn btn-secondary w-25" onClick={() => updateHandler(item._id, "Undecided", i)}>Undecided</button>
                                        </span>
                                        : <span className="d-flex justify-content-around w-75">
                                        <button className="btn btn-secondary w-25" onClick={() => updateHandler(item._id, "Playing", i)}>Playing</button>
                                        <button className="btn w-25" onClick={() => updateHandler(item._id, "Not playing", i)} style={{backgroundColor: "red"}}>{item.playerStatus}</button>
                                        <button className="btn btn-secondary w-25" onClick={() => updateHandler(item._id, "Undecided", i)}>Undecided</button>
                                        </span>
                                        }
                                        </div>
                                    </td>
                                </tr>
                            )})
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PlayerStatus;