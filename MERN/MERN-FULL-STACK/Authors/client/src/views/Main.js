import React from 'react';
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Main = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/all")
            .then(res => {
                setAuthors(res.data);
            })
            .catch(err => {console.log(err)})
    }, [])
    
    const onDeleteHandler = (_id, arrIndex) => {
        console.log("delete")
        axios.delete("http://localhost:8000/api/authors/" + _id)
            .then(res => {
                console.log(res)
                const copyState = [...authors]
                copyState.splice(arrIndex, 1)
                setAuthors(copyState)
            })
            .catch(err => console.log(err.response))
    }

    return(
        <div>
        <p>We have quotes by:</p>
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                <th scope="col">Authors</th>
                <th scope="col">Actions Available</th>
                </tr>
            </thead>
            <tbody>
                    {
                        authors.sort((a,b) => {
                            var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                            if (nameA < nameB) //sort string ascending
                                return -1;
                            if (nameA > nameB)
                                return 1;
                            return 0;
                        }).map((author, i) => {
                            return <tr key={i}>
                                <td>{author.name}</td>
                                <td>
                                    <div className="d-flex justify-content-around">
                                        <Link to={`/edit/${author._id}`} className="btn btn-primary w-25">Edit</Link>
                                        <button className="btn btn-danger w-25" onClick={() => onDeleteHandler(author._id, i)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        })
                    }
            </tbody>
        </table>

        </div>
    )

}

export default Main;