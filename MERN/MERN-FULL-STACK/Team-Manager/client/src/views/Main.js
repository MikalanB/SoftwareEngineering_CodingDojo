import React, {useState} from'react';
import { useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Main = (props) => {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/teams/all")
        .then (res => {
            console.log(res.data)
            setPlayers(res.data)
        })
        .catch (err => console.log(err))
    }, [])

    const onDeleteHandler = (_id, arrIndex) => {
        console.log("delete")
        axios.delete("http://localhost:8000/api/teams/" + _id)
            .then(res => {
                console.log(res)
                const copyState = [...players]
                copyState.splice(arrIndex, 1)
                setPlayers(copyState)
            })
            .catch(err => console.log(err.response))
    }

    return(
        <div>

            <div className="d-flex justify-content-around my-3">
                <Link to="/players/list" className="btn btn-outline-primary w-25">List</Link>
                <Link to="/create" className="btn btn-outline-primary w-25">Add a Player</Link>
            </div>
            <div className="d-flex justify-content-center">
                <table className="table table-hover table-striped w-75">
                    <thead>
                        <tr>
                        <th scope="col">Player Name</th>
                        <th scope="col">Preffered Position</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            players.map((item, i) => {
                                return <tr key={i}>
                                    <td><Link to={`/edit/${item._id}`}>{item.playerName}</Link></td>
                                    <td>{item.position}</td>
                                    <td><button className="btn btn-danger w-50" onClick={() => onDeleteHandler(item._id, i)}>Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
    </div>
    )
}

export default Main;